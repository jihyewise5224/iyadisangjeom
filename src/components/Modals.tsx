import React, { useState } from 'react';
import {
  X,
  KeyRound,
  BookOpen,
  Heart,
  Bookmark,
  Send,
  ChevronLeft,
  ChevronRight,
  LogOut,
  PlusCircle,
  Feather,
} from 'lucide-react';
import { BlogPost, CATEGORIES, ARTWORK_PLATES } from '../data/storiesData';

export interface UserProfile {
  name: string;
  role: string;
  email: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
  bookmarkedPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

const PRESET_READERS: UserProfile[] = [
  {
    name: '산책자 윤슬',
    role: '조간대와 이끼 관찰자',
    email: 'yunseul@storyshop.kr',
  },
  {
    name: '기록자 서진',
    role: '야간 비행 채집가',
    email: 'seojin@storyshop.kr',
  },
  {
    name: '숲지기 도현',
    role: '오래된 나무 기록자',
    email: 'dohyun@storyshop.kr',
  },
];

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
  bookmarkedPosts,
  onSelectPost,
}) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [roleInput, setRoleInput] = useState('이야기상점 산책자');

  if (!isOpen) return null;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = nameInput.trim() || '다정한 산책자';
    const cleanEmail = emailInput.trim() || 'reader@storyshop.kr';
    onLogin({
      name: cleanName,
      role: roleInput.trim() || '이야기상점 산책자',
      email: cleanEmail,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FBF9F5] border border-[#D6CEBE] rounded-2xl shadow-xl overflow-hidden text-[#1C1917]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 bg-[#F2ECE1] border-b border-[#DED6C6]">
          <div className="flex items-center gap-2.5">
            <KeyRound className="w-5 h-5 text-[#14532D]" />
            <h2 className="font-editorial text-xl font-bold text-[#1C1917]">
              {currentUser ? `${currentUser.name} 님의 서재 열쇠` : '이야기상점 로그인'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#575049] hover:text-[#1C1917] hover:bg-[#E5DEC9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {currentUser ? (
            <>
              <div className="bg-[#F3EFE6] border border-[#DED6C6] rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#6B635B]">{currentUser.role}</p>
                  <p className="font-editorial text-lg font-bold text-[#1C1917] mt-0.5">
                    {currentUser.name}
                  </p>
                  <p className="text-xs font-mono text-[#78716C] mt-0.5">{currentUser.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#9A3412] bg-[#FBF9F5] border border-[#DED6C6] rounded-lg hover:bg-[#F5EBE6] transition-colors whitespace-nowrap"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  로그아웃
                </button>
              </div>

              <div>
                <h3 className="font-editorial text-base font-semibold text-[#1C1917] mb-3">
                  책갈피를 꽂아둔 이야기 ({bookmarkedPosts.length})
                </h3>
                {bookmarkedPosts.length === 0 ? (
                  <p className="text-sm text-[#6B635B] bg-[#F3EFE6] border border-[#E5DEC9] rounded-xl p-4 text-center">
                    아직 책갈피를 꽂아둔 글이 없습니다. 카드의 책갈피 아이콘을 눌러보세요.
                  </p>
                ) : (
                  <ul className="divide-y divide-[#E5DEC9] border border-[#DED6C6] rounded-xl bg-[#FBF9F5] overflow-hidden">
                    {bookmarkedPosts.map((post) => (
                      <li key={post.id}>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectPost(post);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-[#F3EFE6] transition-colors flex items-center justify-between gap-3"
                        >
                          <div className="min-w-0">
                            <p className="text-xs text-[#78350F] font-mono">{post.catalogueNo}</p>
                            <p className="font-editorial text-sm font-semibold text-[#1C1917] truncate">
                              {post.title}
                            </p>
                          </div>
                          <span className="text-xs text-[#14532D] font-medium whitespace-nowrap shrink-0">
                            읽기 →
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-[#575049] leading-relaxed">
                이야기상점에 로그인하시면 마음에 드는 글에 책갈피를 보관하거나 새 글을 기록하고 제목을 수정할 수 있습니다.
              </p>

              <div>
                <p className="text-xs font-medium text-[#6B635B] mb-2.5">
                  빠른 선택 (클릭 시 바로 로그인)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PRESET_READERS.map((preset) => (
                    <button
                      key={preset.email}
                      type="button"
                      onClick={() => {
                        onLogin(preset);
                        onClose();
                      }}
                      className="text-left p-3 rounded-xl border border-[#DED6C6] bg-[#F3EFE6] hover:border-[#14532D] hover:bg-[#EFE9DC] transition-colors"
                    >
                      <p className="font-editorial text-sm font-bold text-[#1C1917]">
                        {preset.name}
                      </p>
                      <p className="text-[11px] text-[#6B635B] mt-0.5 truncate">{preset.role}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E5DEC9] pt-5">
                <form onSubmit={handleCustomSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1.5">
                      이름 또는 필명
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 숲길 산책자"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:outline-none focus:border-[#14532D]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#44403C] mb-1.5">
                        이메일 주소
                      </label>
                      <input
                        type="email"
                        placeholder="reader@storyshop.kr"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:outline-none focus:border-[#14532D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#44403C] mb-1.5">
                        관심 산책길 (수식어)
                      </label>
                      <input
                        type="text"
                        value={roleInput}
                        onChange={(e) => setRoleInput(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:outline-none focus:border-[#14532D]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-5 bg-[#14532D] hover:bg-[#0F3F22] text-[#FBF9F5] font-medium text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    이야기상점 들어가기
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface StoryReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  isBookmarked: boolean;
  isLiked: boolean;
  onToggleBookmark: (postId: string, e: React.MouseEvent) => void;
  onToggleLike: (postId: string, e: React.MouseEvent) => void;
  onAddComment: (postId: string, author: string, content: string) => void;
  currentUser: UserProfile | null;
  allPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export const StoryReaderModal: React.FC<StoryReaderModalProps> = ({
  post,
  onClose,
  isBookmarked,
  isLiked,
  onToggleBookmark,
  onToggleLike,
  onAddComment,
  currentUser,
  allPosts,
  onSelectPost,
}) => {
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  if (!post) return null;

  const category = CATEGORIES.find((c) => c.id === post.categoryId);
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const authorName = currentUser?.name || commentAuthor.trim() || '익명의 산책자';
    onAddComment(post.id, authorName, commentText.trim());
    setCommentText('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 sm:p-6 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF9F5] border border-[#D6CEBE] rounded-2xl shadow-2xl overflow-y-auto text-[#1C1917]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FBF9F5]/95 backdrop-blur-xs border-b border-[#E5DEC9]">
          <div className="flex items-center gap-2 text-xs text-[#6B635B]">
            <BookOpen className="w-4 h-4 text-[#14532D]" />
            <span className="font-medium text-[#14532D]">{category?.name}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{post.catalogueNo}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{post.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => onToggleBookmark(post.id, e)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 border transition-colors whitespace-nowrap ${
                isBookmarked
                  ? 'bg-[#14532D] text-[#FBF9F5] border-[#14532D]'
                  : 'bg-[#F3EFE6] text-[#44403C] border-[#DED6C6] hover:border-[#14532D]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? '책갈피 됨' : '책갈피'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#575049] hover:text-[#1C1917] hover:bg-[#EBE5D8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-12 sm:py-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716C] mb-3">
              <span>채집 장소: {post.location}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] leading-tight">
              {post.title}
            </h1>

            <p className="mt-3 text-base text-[#575049] leading-relaxed">
              {post.subtitle}
            </p>
          </div>

          <figure className="my-8 max-w-3xl mx-auto">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#DED6C6] bg-[#232924]">
              <img
                src={post.imageUrl}
                alt={post.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-2.5 text-xs font-editorial italic text-[#6B635B] text-center">
              {post.figureCaption}
            </figcaption>
          </figure>

          <div className="max-w-2xl mx-auto space-y-6">
            <blockquote className="border-l-2 border-[#14532D] pl-5 py-1 font-editorial italic text-lg sm:text-xl text-[#292524] leading-relaxed">
              “{post.pullQuote}”
            </blockquote>

            <div className="space-y-5 text-[16px] text-[#292524] leading-[1.85]">
              {post.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'first-letter:text-4xl first-letter:font-editorial first-letter:font-bold first-letter:text-[#14532D] first-letter:float-left first-letter:mr-3 first-letter:leading-none'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#F3EFE6] border border-[#DED6C6] flex items-start gap-3">
              <Feather className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5" />
              <p className="text-xs text-[#575049] leading-relaxed font-mono">
                {post.specimenNote}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5DEC9] flex items-center justify-between">
              <button
                type="button"
                onClick={(e) => onToggleLike(post.id, e)}
                className={`px-4 py-2 rounded-xl text-sm font-medium inline-flex items-center gap-2 border transition-colors ${
                  isLiked
                    ? 'bg-[#9A3412]/10 text-[#9A3412] border-[#9A3412]/30'
                    : 'bg-[#F3EFE6] text-[#44403C] border-[#DED6C6] hover:border-[#1C1917]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-[#9A3412]' : ''}`} />
                <span className="tabular-nums">이 이야기에 공감하기 ({post.likes})</span>
              </button>

              <div className="flex items-center gap-2">
                {prevPost && (
                  <button
                    type="button"
                    onClick={() => onSelectPost(prevPost)}
                    className="px-3 py-2 text-xs font-medium text-[#44403C] bg-[#F3EFE6] hover:bg-[#E6DFD1] rounded-lg inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> 이전 글
                  </button>
                )}
                {nextPost && (
                  <button
                    type="button"
                    onClick={() => onSelectPost(nextPost)}
                    className="px-3 py-2 text-xs font-medium text-[#44403C] bg-[#F3EFE6] hover:bg-[#E6DFD1] rounded-lg inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    다음 글 <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5DEC9]">
              <h3 className="font-editorial text-lg font-bold text-[#1C1917] mb-4">
                독자 감상 노트 ({post.comments.length})
              </h3>

              {post.comments.length > 0 && (
                <ul className="space-y-3 mb-5">
                  {post.comments.map((c) => (
                    <li
                      key={c.id}
                      className="p-3.5 rounded-xl bg-[#F3EFE6] border border-[#E2DACB]"
                    >
                      <div className="flex items-center gap-2 text-xs text-[#6B635B] mb-1">
                        <span className="font-semibold text-[#1C1917]">{c.author}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{c.date}</span>
                      </div>
                      <p className="text-sm text-[#292524] leading-relaxed">{c.content}</p>
                    </li>
                  ))}
                </ul>
              )}

              <form onSubmit={handleCommentSubmit} className="space-y-3">
                {!currentUser && (
                  <input
                    type="text"
                    placeholder="작성자 이름 (비워두면 익명의 산책자)"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    className="w-full sm:w-64 px-3 py-2 text-xs bg-white border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#14532D]"
                  />
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="이 이야기에 대한 짧은 감상을 남겨주세요..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 text-sm bg-white border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#14532D]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#14532D] hover:bg-[#0F3F22] text-[#FBF9F5] text-xs font-medium rounded-xl inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>남기기</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WriteStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: 'border' | 'winged' | 'roots' | 'forest';
  onAddPost: (newPost: Omit<BlogPost, 'id' | 'catalogueNo' | 'date' | 'likes' | 'comments'>) => void;
}

export const WriteStoryModal: React.FC<WriteStoryModalProps> = ({
  isOpen,
  onClose,
  initialCategoryId = 'border',
  onAddPost,
}) => {
  const [categoryId, setCategoryId] = useState<'border' | 'winged' | 'roots' | 'forest'>(
    initialCategoryId
  );
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [location, setLocation] = useState('');
  const [pullQuote, setPullQuote] = useState('');
  const [bodyText, setBodyText] = useState('');

  React.useEffect(() => {
    setCategoryId(initialCategoryId);
  }, [initialCategoryId]);

  if (!isOpen) return null;

  const defaultArtByCat: Record<'border' | 'winged' | 'roots' | 'forest', string> = {
    border: ARTWORK_PLATES.border_2,
    winged: ARTWORK_PLATES.winged_2,
    roots: ARTWORK_PLATES.roots_2,
    forest: ARTWORK_PLATES.forest_2,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const paragraphs = bodyText
      .split('\n')
      .map((p) => p.trim())
      .filter(Boolean);

    onAddPost({
      categoryId,
      title: title.trim(),
      subtitle: subtitle.trim() || '이야기상점에 새로 기록된 자연과 사유의 조각',
      readTime: '5분 읽기',
      location: location.trim() || '이야기상점 산책길',
      imageUrl: defaultArtByCat[categoryId],
      imageAlt: `${title.trim()} 삽화`,
      figureCaption: `Fig. — ${title.trim()} 기록 화첩`,
      pullQuote:
        pullQuote.trim() || '작은 것들을 오래 바라보면 그 안에 담긴 계절의 목소리가 들려온다.',
      content:
        paragraphs.length > 0
          ? paragraphs
          : [
              '오늘 산책길에서 마주친 풍경을 이야기상점의 서랍 속에 조심스럽게 적어 남긴다. 스쳐 지나가면 그저 평범한 바람과 풀잎이지만, 이름을 불러주고 멈추어 바라보는 순간 하나의 이야기가 된다.',
            ],
      specimenNote: '채집 노트: 이야기상점 산책자의 수첩에서 옮겨 적은 기록',
    });

    setTitle('');
    setSubtitle('');
    setLocation('');
    setPullQuote('');
    setBodyText('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FBF9F5] border border-[#D6CEBE] rounded-2xl shadow-xl overflow-hidden text-[#1C1917]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 bg-[#F2ECE1] border-b border-[#DED6C6]">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-[#14532D]" />
            <h2 className="font-editorial text-xl font-bold text-[#1C1917]">
              새 블로그 이야기 기록하기
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#575049] hover:text-[#1C1917]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-medium text-[#44403C] mb-1.5">
              카테고리 선택
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoryId(cat.id)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap ${
                    categoryId === cat.id
                      ? 'bg-[#14532D] text-[#FBF9F5] border-[#14532D]'
                      : 'bg-[#F3EFE6] text-[#44403C] border-[#DED6C6] hover:border-[#14532D]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#44403C] mb-1.5">
              블로그 제목 (필수)
            </label>
            <input
              type="text"
              required
              placeholder="이미지 아래 블로그 제목 칸에 노출될 제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm font-editorial bg-white border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#14532D]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#44403C] mb-1.5">
                부제 (한 줄 요약)
              </label>
              <input
                type="text"
                placeholder="짧은 부제를 입력하세요"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#14532D]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#44403C] mb-1.5">
                채집 장소
              </label>
              <input
                type="text"
                placeholder="예: 북한산 둘레길"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#14532D]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#44403C] mb-1.5">
              본문 이야기
            </label>
            <textarea
              rows={4}
              placeholder="이야기 본문을 자유롭게 적어주세요..."
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#14532D]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-[#575049] bg-[#EBE5D8] rounded-xl"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-medium text-[#FBF9F5] bg-[#14532D] hover:bg-[#0F3F22] rounded-xl cursor-pointer"
            >
              이야기상점에 게시하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
