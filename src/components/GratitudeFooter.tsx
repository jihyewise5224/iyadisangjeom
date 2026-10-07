import React, { useState } from 'react';
import { Feather, HeartHandshake, Send, ArrowUp } from 'lucide-react';
import { GuestbookEntry, CATEGORIES } from '../data/storiesData';
import { UserProfile } from './Modals';

interface GratitudeFooterProps {
  guestbook: GuestbookEntry[];
  onAddGuestbook: (entry: Omit<GuestbookEntry, 'id' | 'date'>) => void;
  currentUser: UserProfile | null;
}

export const GratitudeFooter: React.FC<GratitudeFooterProps> = ({
  guestbook,
  onAddGuestbook,
  currentUser,
}) => {
  const [visitorName, setVisitorName] = useState('');
  const [favoriteCategory, setFavoriteCategory] = useState(CATEGORIES[0].name);
  const [message, setMessage] = useState('');
  const [submittedToast, setSubmittedToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onAddGuestbook({
      visitorName: currentUser?.name || visitorName.trim() || '다정한 방문자',
      favoriteCategory,
      message: message.trim(),
    });
    setMessage('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#DED6C6] bg-[#EFEAE0] text-[#1C1917]">
      {/* 블로그를 찾아준 것에 대한 감사인사 */}
      <section
        id="gratitude-section"
        aria-label="블로그 방문 감사 인사"
        className="max-w-7xl mx-auto px-6 py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Shopkeeper's Gratitude Note */}
          <div className="lg:col-span-7 bg-[#FBF9F5] border border-[#D8CFC0] rounded-2xl p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-[#78350F] mb-4">
              <HeartHandshake className="w-4 h-4 text-[#14532D]" />
              <span>찾아주신 분께 드리는 인사</span>
              <span aria-hidden="true">·</span>
              <span>이야기상점 주인장 올림</span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1917] leading-snug">
              바쁜 걸음을 멈추고 이야기상점의 작은 문을 열어주셔서 진심으로 고맙습니다
            </h2>

            <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#292524] leading-[1.85] max-w-2xl">
              <p>
                세상의 속도가 갈수록 빨라질수록, 물과 뭍의 경계에 피어난 작은 이끼나 밤하늘을 소리 없이 건너는 날개, 어두운 땅속에서 바위를 껴안는 뿌리와 안개 낀 숲의 형상들은 자칫 스쳐 지나가기 쉽습니다.
              </p>
              <p>
                오늘 이 블로그에 머물며 <strong className="font-semibold text-[#14532D]">경계에사는것들</strong>,{' '}
                <strong className="font-semibold text-[#14532D]">날개달린것들</strong>,{' '}
                <strong className="font-semibold text-[#14532D]">뿌리와가시</strong>, 그리고{' '}
                <strong className="font-semibold text-[#14532D]">숲의형상</strong>까지 네 개의 방을 천천히 산책해 주신 당신의 시선 덕분에, 이곳에 모아둔 사진과 문장들이 비로소 살아 숨 쉬는 이야기가 되었습니다.
              </p>
              <p>
                당신이 머물다 간 오늘의 발자국이 이야기상점에는 가장 귀한 선물입니다. 마음이 소란스러운 날이나 고요한 숲의 숨결이 그리운 날이면 언제든 다시 들러 책갈피를 꽂아 주세요. 당신의 일상에도 늘 다정한 빛과 바람이 함께하기를 바랍니다.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DEC9] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#14532D] text-[#FBF9F5] flex items-center justify-center">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-editorial text-base font-bold text-[#1C1917]">
                    이야기상점
                  </p>
                  <p className="text-xs text-[#6B635B]">
                    자연과 사유의 조각들을 채집하고 기록합니다
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#44403C] bg-[#F3EFE6] hover:bg-[#E5DEC9] border border-[#DED6C6] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>맨 위로 올라가기</span>
              </button>
            </div>
          </div>

          {/* Visitor Guestbook */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FBF9F5] border border-[#D8CFC0] rounded-2xl p-6 sm:p-7">
              <h3 className="font-editorial text-lg font-bold text-[#1C1917]">
                방명록에 인사 남기기
              </h3>
              <p className="mt-1 text-xs text-[#6B635B]">
                오늘 둘러보신 네 가지 카테고리 중 가장 마음에 남은 곳과 짧은 인사를 남겨주세요.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-medium text-[#575049] mb-1">
                      방문자 이름
                    </label>
                    <input
                      type="text"
                      placeholder={currentUser ? currentUser.name : '예: 가을 산책자'}
                      value={currentUser ? currentUser.name : visitorName}
                      disabled={Boolean(currentUser)}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D6CEBE] rounded-lg text-[#1C1917] disabled:bg-[#F3EFE6] focus:outline-none focus:border-[#14532D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#575049] mb-1">
                      가장 좋았던 카테고리
                    </label>
                    <select
                      value={favoriteCategory}
                      onChange={(e) => setFavoriteCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:outline-none focus:border-[#14532D]"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#575049] mb-1">
                    이야기상점에 남기는 한마디
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="따뜻한 방문 인사를 남겨주세요..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs bg-white border border-[#D6CEBE] rounded-lg text-[#1C1917] focus:outline-none focus:border-[#14532D]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#14532D] hover:bg-[#0F3F22] text-[#FBF9F5] text-xs font-medium rounded-lg inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>기록</span>
                    </button>
                  </div>
                </div>

                {submittedToast && (
                  <p className="text-xs text-[#14532D] font-medium">
                    방명록에 소중한 인사가 기록되었습니다. 찾아주셔서 고맙습니다!
                  </p>
                )}
              </form>

              {/* Guestbook List */}
              <div className="mt-6 pt-5 border-t border-[#E5DEC9] space-y-3 max-h-64 overflow-y-auto">
                {guestbook.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#F3EFE6] border border-[#E2DACB]"
                  >
                    <div className="flex items-center justify-between text-xs text-[#6B635B] mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-[#1C1917]">{item.visitorName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#14532D]">{item.favoriteCategory}</span>
                      </div>
                      <span className="font-mono text-[11px] tabular-nums">{item.date}</span>
                    </div>
                    <p className="text-xs text-[#292524] leading-relaxed">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Archival Bottom Bar */}
      <div className="border-t border-[#DED6C6] bg-[#E7E0D3]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#575049]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-editorial font-bold text-[#1C1917]">이야기상점</span>
            <span aria-hidden="true">·</span>
            <span>경계에사는것들</span>
            <span aria-hidden="true">·</span>
            <span>날개달린것들</span>
            <span aria-hidden="true">·</span>
            <span>뿌리와가시</span>
            <span aria-hidden="true">·</span>
            <span>숲의형상</span>
          </div>
          <p className="tabular-nums">
            © 2026 이야기상점. 찾아주신 모든 걸음에 감사드립니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
