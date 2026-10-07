import React, { useState, useMemo } from 'react';
import {
  KeyRound,
  Search,
  Plus,
  Bookmark,
} from 'lucide-react';
import {
  CATEGORIES,
  INITIAL_BLOG_POSTS,
  INITIAL_GUESTBOOK,
  BlogPost,
  GuestbookEntry,
} from './data/storiesData';
import { StoryCard } from './components/StoryCard';
import {
  LoginModal,
  StoryReaderModal,
  WriteStoryModal,
  UserProfile,
} from './components/Modals';
import { GratitudeFooter } from './components/GratitudeFooter';

export default function App() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>(INITIAL_GUESTBOOK);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<
    'all' | 'border' | 'winged' | 'roots' | 'forest'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');

  // User & interaction states
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['border-1', 'winged-1']);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  // Modal states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [writeModalCategory, setWriteModalCategory] = useState<
    'border' | 'winged' | 'roots' | 'forest' | null
  >(null);

  const selectedPost = useMemo(
    () => posts.find((p) => p.id === selectedPostId) || null,
    [posts, selectedPostId]
  );

  const bookmarkedPosts = useMemo(
    () => posts.filter((p) => bookmarkedIds.includes(p.id)),
    [posts, bookmarkedIds]
  );

  const handleToggleBookmark = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const handleToggleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const alreadyLiked = likedIds.includes(postId);
    setLikedIds((prev) =>
      alreadyLiked ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, likes: alreadyLiked ? Math.max(0, p.likes - 1) : p.likes + 1 }
          : p
      )
    );
  };

  const handleUpdateTitle = (postId: string, newTitle: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, title: newTitle } : p))
    );
  };

  const handleAddComment = (postId: string, author: string, content: string) => {
    const today = '2026. 10. 07';
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                {
                  id: `c-${Date.now()}`,
                  author,
                  date: today,
                  content,
                },
              ],
            }
          : p
      )
    );
  };

  const handleAddPost = (
    newPostData: Omit<BlogPost, 'id' | 'catalogueNo' | 'date' | 'likes' | 'comments'>
  ) => {
    const categoryPosts = posts.filter((p) => p.categoryId === newPostData.categoryId);
    const catIdx = CATEGORIES.findIndex((c) => c.id === newPostData.categoryId) + 1;
    const nextNum = String(categoryPosts.length + 1).padStart(2, '0');
    const newPost: BlogPost = {
      ...newPostData,
      id: `${newPostData.categoryId}-${Date.now()}`,
      catalogueNo: `ARC-0${catIdx}-${nextNum}`,
      date: '2026. 10. 07',
      likes: 1,
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleAddGuestbook = (entry: Omit<GuestbookEntry, 'id' | 'date'>) => {
    const newEntry: GuestbookEntry = {
      ...entry,
      id: `gb-${Date.now()}`,
      date: '2026. 10. 07',
    };
    setGuestbook((prev) => [newEntry, ...prev]);
  };

  const scrollToCategory = (catId: 'border' | 'winged' | 'roots' | 'forest') => {
    const el = document.getElementById(`section-${catId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleCategories = useMemo(() => {
    if (activeCategoryFilter === 'all') return CATEGORIES;
    return CATEGORIES.filter((c) => c.id === activeCategoryFilter);
  }, [activeCategoryFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      {/* =====================================================================
          홈페이지 상단: 제목 "이야기상점"
          그 아래: 카테고리 4개 (경계에사는것들, 날개달린것들, 뿌리와가시, 숲의형상)
          그 옆으로: 큼직막하고 예쁜 로그인단추 (단 하나의 로그인 단추)
      ===================================================================== */}
      <header className="border-b border-[#DED6C6] bg-gradient-to-b from-[#F5F0E6] to-[#FBF9F5] pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* 1. 홈페이지 제목: 이야기상점 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DED6C6]">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#78350F] mb-3">
                NATURAL HISTORY &amp; LITERARY ARCHIVE
              </p>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
                이야기상점
              </h1>
              <p className="mt-3.5 text-base sm:text-lg text-[#44403C] max-w-2xl leading-relaxed">
                자연과 사유의 조각들을 채집해 기록하는 블로그입니다.
              </p>
            </div>

            {/* 검색 및 새 글 / 책갈피 편의 기능 */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="블로그 제목 검색..."
                  className="w-full sm:w-56 pl-9 pr-4 py-2.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded-xl text-[#1C1917] placeholder:text-[#8C847B] focus:outline-none focus:border-[#14532D]"
                />
              </div>

              <button
                type="button"
                onClick={() => setWriteModalCategory('border')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#1C1917] bg-[#F2ECE1] hover:bg-[#E5DEC9] border border-[#DED6C6] rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-[#14532D]" />
                <span>새 글 기록</span>
              </button>

              <button
                type="button"
                onClick={() => setIsLoginModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#44403C] bg-[#FBF9F5] hover:bg-[#EFEAE0] border border-[#D6CEBE] rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#14532D]" />
                <span className="tabular-nums">책갈피 ({bookmarkedIds.length})</span>
              </button>
            </div>
          </div>

          {/* 2. 제목 바로 아래: 카테고리 4개 + 그 옆으로 큼직막하고 예쁜 로그인 단추 */}
          <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 bg-[#F2ECE1] border border-[#D8CFC0] rounded-2xl p-4 sm:p-5 shadow-xs">
            {/* 카테고리 4가지 (경계에사는것들, 날개달린것들, 뿌리와가시, 숲의형상) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setActiveCategoryFilter('all')}
                className={`px-4 py-3.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategoryFilter === 'all'
                    ? 'bg-[#1C1917] text-[#FBF9F5] shadow-xs'
                    : 'bg-[#FBF9F5] text-[#44403C] border border-[#DED6C6] hover:border-[#1C1917]'
                }`}
              >
                전체 보기
              </button>

              {CATEGORIES.map((cat) => {
                const isActive = activeCategoryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      if (activeCategoryFilter === cat.id) {
                        setActiveCategoryFilter('all');
                      } else {
                        setActiveCategoryFilter(cat.id);
                        scrollToCategory(cat.id);
                      }
                    }}
                    className={`group px-5 py-3.5 rounded-xl text-sm sm:text-base font-editorial font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#14532D] text-[#FBF9F5] shadow-sm'
                        : 'bg-[#FBF9F5] text-[#1C1917] border border-[#D8CFC0] hover:border-[#14532D] hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs tabular-nums ${
                        isActive ? 'text-[#CBE3A6]' : 'text-[#78350F]'
                      }`}
                    >
                      {cat.number}.
                    </span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* 그 옆으로 큼직막하고 예쁜 로그인단추 */}
            <div className="flex items-center justify-end shrink-0">
              <button
                type="button"
                onClick={() => setIsLoginModalOpen(true)}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#14532D] hover:bg-[#0F3F22] active:scale-[0.99] text-[#FBF9F5] font-editorial text-lg font-bold tracking-wide shadow-md border border-[#1E6B3E] transition-all cursor-pointer whitespace-nowrap"
              >
                <KeyRound className="w-5 h-5 text-[#E8D8B9]" />
                <span>
                  {currentUser
                    ? `${currentUser.name} 님 (서재 열기)`
                    : '로그인'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================================
          본문: 4가지 카테고리별 4장의 이미지와 블로그제목 노출 칸
      ===================================================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 space-y-20">
        {visibleCategories.map((category) => {
          const categoryPosts = posts
            .filter((p) => p.categoryId === category.id)
            .filter(
              (p) =>
                !searchQuery.trim() ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.location.toLowerCase().includes(searchQuery.toLowerCase())
            );

          return (
            <section
              key={category.id}
              id={`section-${category.id}`}
              className="scroll-mt-12"
            >
              {/* 카테고리명 헤더 */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#D6CEBE]">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#78350F] mb-2">
                    <span className="font-mono font-semibold tabular-nums">
                      {category.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-editorial italic text-sm text-[#575049]">
                      {category.englishSubtitle}
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight">
                    {category.name}
                  </h2>

                  <p className="mt-2.5 text-sm sm:text-base text-[#575049] max-w-2xl leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-[#6B635B] tabular-nums">
                    글 {categoryPosts.length}편
                  </span>
                  <button
                    type="button"
                    onClick={() => setWriteModalCategory(category.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#14532D] bg-[#F2ECE1] hover:bg-[#E5DEC9] border border-[#D6CEBE] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>글 쓰기</span>
                  </button>
                </div>
              </div>

              {/* 4장의 이미지와 그 아래 블로그제목이 노출되는 칸 */}
              {categoryPosts.length === 0 ? (
                <div className="p-12 text-center bg-[#F3EFE6] border border-[#DED6C6] rounded-2xl">
                  <p className="text-sm text-[#575049]">
                    검색 결과가 없습니다.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryPosts.map((post, idx) => (
                    <StoryCard
                      key={post.id}
                      post={post}
                      indexInCategory={idx}
                      isBookmarked={bookmarkedIds.includes(post.id)}
                      isLiked={likedIds.includes(post.id)}
                      onSelectPost={(p) => setSelectedPostId(p.id)}
                      onToggleBookmark={handleToggleBookmark}
                      onToggleLike={handleToggleLike}
                      onUpdateTitle={handleUpdateTitle}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>

      {/* =====================================================================
          맨 아래: 블로그를 찾아준 것에 대한 감사인사
      ===================================================================== */}
      <GratitudeFooter
        guestbook={guestbook}
        onAddGuestbook={handleAddGuestbook}
        currentUser={currentUser}
      />

      {/* =====================================================================
          모달 (로그인 / 글 읽기 / 글 쓰기)
      ===================================================================== */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        currentUser={currentUser}
        onLogin={(user) => setCurrentUser(user)}
        onLogout={() => setCurrentUser(null)}
        bookmarkedPosts={bookmarkedPosts}
        onSelectPost={(p) => setSelectedPostId(p.id)}
      />

      <StoryReaderModal
        post={selectedPost}
        onClose={() => setSelectedPostId(null)}
        isBookmarked={selectedPost ? bookmarkedIds.includes(selectedPost.id) : false}
        isLiked={selectedPost ? likedIds.includes(selectedPost.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onToggleLike={handleToggleLike}
        onAddComment={handleAddComment}
        currentUser={currentUser}
        allPosts={posts}
        onSelectPost={(p) => setSelectedPostId(p.id)}
      />

      <WriteStoryModal
        isOpen={Boolean(writeModalCategory)}
        onClose={() => setWriteModalCategory(null)}
        initialCategoryId={writeModalCategory || 'border'}
        onAddPost={handleAddPost}
      />
    </div>
  );
}
