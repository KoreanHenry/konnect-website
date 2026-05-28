// =============================================
//   KONNECT 설정 파일
//   모임 관련 모든 내용은 여기서만 수정하세요
// =============================================

const CONFIG = {

  // ══════════════════════════════════════════
  //   정기 언어교환 모임
  // ══════════════════════════════════════════
  NEXT_MEETUP_DATE:    '2026-05-30T13:30:00+09:00',
  SPOTS_LEFT:          '',   // 숫자 ('8') 또는 '' = 표시 안 함

  MEETUP: {
    ko: {
      date:     '5월 30일 토요일',
      time:     '오후 1:30',
      location: '시청역 근처',
      price:    '₩20,000',
      ctaKr:    '₩20,000 결제하기 →',
      ctaIntl:  '외국인 ($16)',
    },
    en: {
      date:     'Saturday, May 30',
      time:     '1:30 PM',
      location: 'City Hall Station',
      price:    '$16',
      ctaKr:    'Reserve Korean (₩20,000) →',
      ctaIntl:  'International ($16) →',
    },
  },


  // ══════════════════════════════════════════
  //   방탈출 모임
  // ══════════════════════════════════════════
  ESCAPE: {
    link: 'join.html?event=escape',

    ko: {
      badge:         '신청 오픈',
      title:         '방탈출 나이트',
      date:          '6월 20일 (금)',
      time:          '오후 2:30 – 8:00',
      location:      '홍대',
      price:         '₩30,000',
      scheduleTitle: '타임라인',
      schedule: [
        '오후 2:30 — 4:00 카페에서 만남 + 아이스브레이킹',
        '오후 4:00 — 4:30 방탈출 카페로 이동',
        '오후 4:30 – 6:00 — 방탈출 진행',
        '오후 6:00 - 8:00 식당으로 이동 후 저녁 식사',
        '오후 8:00 - 자율 2차 뒤풀이',
      ],
      note: '취향에 따라 방탈출 테마를 배정해드려요',
      cta:  '신청하기 →',
      // join 페이지용
      pageTag:   '방탈출 나이트',
      pageTitle: '방탈출 신청하기',
      pageSub:   '폼을 작성하고 결제를 완료하면 자리가 확정됩니다.',
      ctaKr:     '₩30,000 결제하기 →',
      ctaIntl:   '외국인 ($22)',
    },
    en: {
      badge:         'Open Now',
      title:         'Escape Room Night',
      date:          'June 20 (Fri)',
      time:          '2:30 PM – 8:00 PM',
      location:      'Hongdae',
      price:         '$22 USD',
      scheduleTitle: 'Schedule',
      schedule: [
        '2:30 — 2:00 PM Meet at cafe + icebreaking',
        '4:00 — 4:30 PM Move to escape room cafe',
        '4:30 – 6:00 PM — Escape room',
        '6:00 — 8:00 PM Dinner together',
        '8:00 PM — Optional afterparty',
      ],
      note: 'Themes matched to your preference',
      cta:  'Sign up →',
      // join 페이지용
      pageTag:   'Escape Room Night',
      pageTitle: 'Sign up — Escape Room',
      pageSub:   'Fill out the form and complete payment to join!',
      ctaKr:     'Pay ₩30,000 →',
      ctaIntl:   'Pay $22 USD →',
    },
  },


  // ══════════════════════════════════════════
  //   결제 정보
  // ══════════════════════════════════════════

  // 정기 모임 결제
  KAKAO_PAY: 'https://qr.kakaopay.com/여기에_카카오페이_링크',
  STRIPE:    'https://buy.stripe.com/3cI00j0jK72Y85R9xifw40e',
  PAYPAL:    'https://www.paypal.com/ncp/payment/UPBSVATMW2SPJ',

  // 방탈출 결제 (별도 링크 생성 후 여기 입력)
  ESCAPE_KAKAO_PAY: 'https://qr.kakaopay.com/여기에_방탈출_링크',
  ESCAPE_STRIPE:    'https://buy.stripe.com/여기에_방탈출_링크',

  // 계좌이체
  BANK:           '카카오뱅크',
  ACCOUNT:        '3333-33-7607681',
  ACCOUNT_HOLDER: '안형욱(코지 Kozy)',

};


// =============================================
//   아래 코드는 수정하지 마세요
// =============================================
function applyConfig() {
  const lang = localStorage.getItem('konnect-lang') ||
    (navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en');
  const m = CONFIG.MEETUP[lang] || CONFIG.MEETUP.en;

  // ① 카운트다운 날짜
  if (typeof NEXT_MEETUP !== 'undefined') {
    NEXT_MEETUP = new Date(CONFIG.NEXT_MEETUP_DATE);
  }

  // ② T 번역 객체 날짜/스팟 업데이트 (index.html)
  if (typeof T !== 'undefined') {
    ['ko','en'].forEach(l => {
      if (!T[l]) return;
      const v = CONFIG.MEETUP[l];
      if (!v) return;
      T[l].evDate  = '📍 ' + v.location + ' · ' + v.date + ' · ' + v.time;
      T[l].evSpots = CONFIG.SPOTS_LEFT
        ? (l==='ko' ? '잔여 '+CONFIG.SPOTS_LEFT+'자리' : CONFIG.SPOTS_LEFT+' spots remaining')
        : '';
    });
    if (typeof setLang === 'function') setLang(lang);
  }

  // ③ join.html 정기모임 T 업데이트
  if (typeof T !== 'undefined' && T.ko && T.ko.ev2 !== undefined) {
    T.ko.ev2 = CONFIG.MEETUP.ko.date;
    T.ko.ev3 = CONFIG.MEETUP.ko.time;
    T.ko.ev4 = CONFIG.MEETUP.ko.location;
    T.ko.ctaKr   = CONFIG.MEETUP.ko.ctaKr;
    T.ko.ctaIntl = CONFIG.MEETUP.ko.ctaIntl;
    T.en.ev2 = CONFIG.MEETUP.en.date;
    T.en.ev3 = CONFIG.MEETUP.en.time;
    T.en.ev4 = CONFIG.MEETUP.en.location;
    T.en.ctaKr   = CONFIG.MEETUP.en.ctaKr;
    T.en.ctaIntl = CONFIG.MEETUP.en.ctaIntl;
    if (typeof setLang === 'function') setLang(lang);
  }

  // ④ 결제 링크
  document.querySelectorAll('[data-pay="kakao"]').forEach(el => el.href = CONFIG.KAKAO_PAY);
  document.querySelectorAll('[data-pay="stripe"]').forEach(el => el.href = CONFIG.STRIPE);
  document.querySelectorAll('[data-pay="paypal"]').forEach(el => el.href = CONFIG.PAYPAL);
  document.querySelectorAll('[data-pay="escape-kakao"]').forEach(el => el.href = CONFIG.ESCAPE_KAKAO_PAY);
  document.querySelectorAll('[data-pay="escape-stripe"]').forEach(el => el.href = CONFIG.ESCAPE_STRIPE);

  // ⑤ 잔여 자리
  document.querySelectorAll('[data-spots]').forEach(el => {
    el.style.display = CONFIG.SPOTS_LEFT ? '' : 'none';
    if (CONFIG.SPOTS_LEFT) el.textContent = CONFIG.SPOTS_LEFT +
      (lang === 'ko' ? '자리 남음' : ' spots remaining');
  });

  // ⑥ 계좌이체
  document.querySelectorAll('[data-account]').forEach(el =>
    el.textContent = CONFIG.BANK + ' ' + CONFIG.ACCOUNT);
  document.querySelectorAll('[data-account-holder]').forEach(el =>
    el.textContent = CONFIG.ACCOUNT_HOLDER);
}

document.addEventListener('DOMContentLoaded', applyConfig);
