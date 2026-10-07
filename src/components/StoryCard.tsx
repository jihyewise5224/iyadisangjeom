import React, { useState } from 'react';
import { Bookmark, Heart, Pencil, Check, X, ArrowUpRight, Feather } from 'lucide-react';
import { BlogPost } from '../data/storiesData';

interface StoryCardProps {
  post: BlogPost;
  indexInCategory: number;
  isBookmarked: boolean;
  isLiked: boolean;
  onSelectPost: (post: BlogPost) => void;
  onToggleBookmark: (postId: string, e: React.MouseEvent) => void;
  onToggleLike: (postId: string, e: React.MouseEvent) => void;
  onUpdateTitle: (postId: string, newTitle: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  post,
  indexInCategory,
  isBookmarked,
  isLiked,
  onSelectPost,
  onToggleBookmark,
  onToggleLike,
  onUpdateTitle,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [draftTitle, setDraftTitle] = useState(post.title);

  const handleSaveTitle = (e: React.FormEvent | React.MouseEvent) => {
    e.stopPropagation();
    const trimmed = draftTitle.trim();
    if (trimmed) {
      onUpdateTitle(post.id, trimmed);
    } else {
      setDraftTitle(post.title);
    }
    setIsEditingTitle(false);
  };

  const handleCancelEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDraftTitle(post.title);
    setIsEditingTitle(false);
  };

  return (
    <article
      onClick={() => !isEditingTitle && onSelectPost(post)}
      className="group cursor-pointer flex flex-col bg-[#FBF9F5] border border-[#DED6C6] rounded-xl overflow-hidden transition-transform duration-200 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#14532D]"
    >
      {/* 1. 이미지 칸 (4:3 Aspect Ratio) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#232924]">
        {!imgError ? (
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#232B24] via-[#2F3B30] to-[#1A201B] text-[#EBE6DF]">
            <Feather className="w-7 h-7 mb-2 opacity-70" />
            <span className="text-xs font-mono tracking-widest opacity-60">{post.catalogueNo}</span>
            <p className="mt-1 text-sm font-editorial line-clamp-2 opacity-90">{post.title}</p>
          </div>
        )}

        {/* Hover scrim & top-right bookmark button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

        <button
          type="button"
          onClick={(e) => onToggleBookmark(post.id, e)}
          aria-label={isBookmarked ? '책갈피 해제' : '책갈피에 추가'}
          title={isBookmarked ? '책갈피 해제' : '책갈피에 추가'}
          className={`absolute top-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center transition-opacity duration-200 ${
            isBookmarked
              ? 'bg-[#14532D] text-[#FBF9F5] opacity-100'
              : 'bg-[#1C1917]/70 text-[#FBF9F5] opacity-0 group-hover:opacity-100 hover:bg-[#1C1917]'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>

        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#FBF9F5]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="truncate">{post.location}</span>
          <span className="inline-flex items-center gap-0.5 font-medium whitespace-nowrap shrink-0">
            글 읽기 <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* 2. 블로그제목이 노출되는 칸 (Blog Title Box Below Image) */}
      <div className="flex flex-col flex-1 justify-between bg-[#F3EFE6] border-t border-[#DED6C6] p-4 sm:p-5">
        <div>
          {/* Metadata row: unboxed text with · separators */}
          <div className="flex items-center justify-between gap-2 text-xs text-[#6B635B] mb-2">
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-mono tabular-nums text-[#78350F] font-medium">
                0{indexInCategory + 1}
              </span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            {!isEditingTitle && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDraftTitle(post.title);
                  setIsEditingTitle(true);
                }}
                title="블로그 제목 직접 수정하기"
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 inline-flex items-center gap-1 text-[11px] text-[#6B635B] hover:text-[#14532D] transition-opacity whitespace-nowrap shrink-0"
              >
                <Pencil className="w-3 h-3" />
                <span>제목 수정</span>
              </button>
            )}
          </div>

          {/* 블로그제목 노출 칸 */}
          {isEditingTitle ? (
            <form
              onSubmit={handleSaveTitle}
              onClick={(e) => e.stopPropagation()}
              className="mt-1 space-y-2"
            >
              <label className="block text-[11px] font-medium text-[#14532D]">
                블로그 제목 편집
              </label>
              <input
                type="text"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                autoFocus
                className="w-full px-2.5 py-1.5 text-sm font-editorial font-semibold bg-[#FBF9F5] border border-[#14532D] rounded-md text-[#1C1917] focus:outline-none"
              />
              <div className="flex items-center justify-end gap-1.5">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-2.5 py-1 text-xs text-[#575049] hover:text-[#1C1917] bg-[#E6E0D3] rounded whitespace-nowrap"
                >
                  <X className="w-3.5 h-3.5 inline mr-0.5" />
                  취소
                </button>
                <button
                  type="submit"
                  className="px-2.5 py-1 text-xs text-[#FBF9F5] bg-[#14532D] hover:bg-[#0F3F22] rounded whitespace-nowrap"
                >
                  <Check className="w-3.5 h-3.5 inline mr-0.5" />
                  저장
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[#FBF9F5] border border-[#E2DACB] rounded-lg px-3.5 py-3 shadow-2xs group-hover:border-[#14532D]/40 transition-colors">
              <div className="text-[11px] text-[#78716C] mb-1 flex items-center justify-between">
                <span>블로그 제목</span>
                <span className="font-mono text-[10px] text-[#A8A096] tabular-nums">
                  {post.catalogueNo}
                </span>
              </div>
              <h3 className="font-editorial text-[16px] sm:text-[17px] font-semibold leading-snug text-[#1C1917] group-hover:text-[#14532D] transition-colors line-clamp-2">
                {post.title}
              </h3>
            </div>
          )}

          {/* Subtitle / Excerpt */}
          <p className="mt-2.5 text-xs text-[#575049] leading-relaxed line-clamp-2">
            {post.subtitle}
          </p>
        </div>

        {/* Card bottom bar */}
        <div className="mt-3.5 pt-2.5 border-t border-[#E2DACB] flex items-center justify-between text-xs text-[#6B635B]">
          <button
            type="button"
            onClick={(e) => onToggleLike(post.id, e)}
            className={`inline-flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              isLiked ? 'text-[#9A3412] font-medium' : 'hover:text-[#1C1917]'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-[#9A3412]' : ''}`} />
            <span className="tabular-nums">공감 {post.likes}</span>
          </button>

          <span className="text-[#14532D] font-medium group-hover:underline whitespace-nowrap">
            전문 읽기 →
          </span>
        </div>
      </div>
    </article>
  );
};
