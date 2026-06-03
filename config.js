// =============================================
//   KONNECT 설정 파일
// =============================================
//
//   ✏️ 정기 모임 날짜/시간 변경 방법:
//   NEXT_MEETUP_DATE 하나만 바꾸세요.
//   형식: 'YYYY-MM-DDTHH:MM:SS+09:00'
// =============================================

const CONFIG = {

  // ── 정기 언어교환 ───────────────────────────
  NEXT_MEETUP_DATE: '2026-06-13T13:30:00+09:00',
  NEXT_MEETUP_END_DATE: '2026-06-13T15:00:00+09:00',
  SPOTS_LEFT: '', // 숫자 문자열 또는 '' = 숨김
  LOCATION_KO: '시청역 근처',
  LOCATION_EN: 'City Hall Station',
  PRICE_KR: '₩20,000',
  PRICE_INTL: '$16',

  REGULAR: {
    ko: {
      title: '언어교환 모임',
      pageTag: 'Konnect 신청',
      pageTitle: '자리 예약하기',
      pageSub: '폼을 작성하고 결제를 완료하면 자리가 확정됩니다.',
      ctaKr: '결제하기 (₩20,000) →',
      ctaIntl: 'Pay $16 →'
    },
    en: {
      title: 'Language Exchange',
      pageTag: 'Join Konnect',
      pageTitle: 'Reserve your spot',
      pageSub: 'Fill out the form and complete payment to secure your place.',
      ctaKr: 'Pay ₩20,000 →',
      ctaIntl: 'Pay $16 →'
    }
  },

  // ── 방탈출 스페셜 이벤트 ─────────────────────
  ESCAPE: {
    link: 'join.html?event=escape',       // 최종 신청/결제 페이지
    detailLink: 'escape.html',            // 상세 설명 페이지
    spotsLeft: '',                      // 숫자 문자열 또는 '' = 숨김

    regularPriceKr: '₩69,000',
    earlyBirdPriceKr: '₩59,000',
    returningPriceKr: '₩64,000',
    friendPriceKr: '₩59,000',
    regularPriceIntl: '$51',
    earlyBirdPriceIntl: '$43',
    returningPriceIntl: '$47',
    friendPriceIntl: '$43',

    ko: {
      badge: '신청 오픈',
      title: 'KONNECT 방탈출 나이트',
      shortTitle: '방탈출 나이트',
      subtitle: '카페 아이스브레이킹, 방탈출 미션, 저녁 식사까지 함께하는 스페셜 소셜 이벤트.',
      date: '6월 20일 (토)',
      time: '오후 2:30 – 8:00',
      location: '홍대',
      price: '₩69,000',
      earlyBirdPrice: '₩59,000',
      cta: '신청하기 →',
      detailCta: '자세히 보기 →',
      pageTag: 'KONNECT Special Event',
      pageTitle: '방탈출 신청하기',
      pageSub: '신청 폼을 작성하고 결제를 완료하면 자리가 확정됩니다.',
      ctaKr: '결제하기 (₩69,000) →',
      ctaIntl: 'Pay $51 →',
      heroTitle: 'KONNECT 방탈출 나이트',
      heroSub: '단순한 언어교환이 아닙니다. 한국인과 외국인이 팀을 이루어 미션을 해결하고, 자연스럽게 친해지는 하루를 만들어보세요.',
      oneLine: '카페에서 친해지고, 방탈출에서 협력하고, 저녁 식사로 연결되는 글로벌 소셜 이벤트.',
      scheduleTitle: '일정',
      schedule: [
        { time: '14:30 – 15:50', activity: '카페 아이스브레이킹', place: '인근 카페' },
        { time: '16:00 – 18:00', activity: '방탈출 미션', place: '브레이크아웃 이스케이프 홍대점 예정' },
        { time: '18:00 – 20:00', activity: '저녁 식사', place: '고깃집 예정' },
        { time: '20:00 이후', activity: '자율 뒤풀이', place: '희망자만' }
      ],
      includedTitle: '참가비 포함 사항',
      included: ['카페 음료', '방탈출 참가비', '저녁 식사', '팀 매칭', '호스트 진행', '이벤트 운영'],
      excludedTitle: '불포함 사항',
      excluded: ['20:00 이후 자율 뒤풀이 비용', '개인 추가 주문'],
      priceTitle: '참가비',
      prices: [
        { name: '일반 참가', price: '₩69,000' },
        { name: '얼리버드', price: '₩59,000' },
        { name: '기존 KONNECT 참가자', price: '₩64,000' },
        { name: '친구와 함께 신청', price: '1인 ₩59,000' }
      ],
      discountNote: '할인 혜택은 중복 적용되지 않습니다.',
      whoTitle: '이런 분께 추천해요',
      who: [
        '서울에서 외국인 친구를 만들고 싶은 사람',
        '한국인 친구를 만나고 싶은 외국인',
        '단순 프리토킹보다 활동형 모임을 좋아하는 사람',
        '영어/한국어를 자연스럽게 연습하고 싶은 사람',
        '방탈출, 팀게임, 저녁 모임을 좋아하는 사람'
      ],
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '혼자 와도 괜찮나요?', a: '네. 혼자 오는 분들도 자연스럽게 팀에 섞일 수 있도록 호스트가 팀을 구성하고 아이스브레이킹을 진행합니다.' },
        { q: '영어나 한국어를 잘 못해도 참여할 수 있나요?', a: '가능합니다. 완벽한 언어 실력보다 함께 협력하고 대화하려는 마음이 더 중요합니다.' },
        { q: '참가비에는 무엇이 포함되나요?', a: '카페 음료, 방탈출 참가비, 저녁 식사, 팀 매칭, 호스트 진행, 이벤트 운영이 포함됩니다.' },
        { q: '뒤풀이는 필수인가요?', a: '아니요. 20:00 이후 뒤풀이는 희망자만 참여하는 자율 일정입니다.' },
        { q: '환불이 가능한가요?', a: '기본 환불정책을 따르되, 외부 예약이 필요한 특별 이벤트 특성상 신청 페이지의 안내를 우선 적용합니다.' }
      ],
      finalTitle: '하루 동안 진짜로 가까워지는 이벤트',
      finalSub: 'KONNECT Escape Night에서 새로운 사람들과 팀이 되어 미션을 해결해보세요.'
    },

    en: {
      badge: 'Open Now',
      title: 'KONNECT Escape Night',
      shortTitle: 'Escape Room Night',
      subtitle: 'Cafe icebreaking, escape room missions, and Korean dinner in one special social event.',
      date: 'June 20 (Sat)',
      time: '2:30 PM – 8:00 PM',
      location: 'Hongdae',
      price: '₩69,000 / $51',
      earlyBirdPrice: '₩59,000 / $43',
      cta: 'Apply Now →',
      detailCta: 'Learn More →',
      pageTag: 'KONNECT Special Event',
      pageTitle: 'Sign up — Escape Night',
      pageSub: 'Fill out the form and complete payment to secure your spot.',
      ctaKr: 'Pay ₩69,000 →',
      ctaIntl: 'Pay $51 →',
      heroTitle: 'KONNECT Escape Night',
      heroSub: 'Not just a language exchange. Team up with Koreans and internationals, solve missions together, and make real connections in Seoul.',
      oneLine: 'Meet at a cafe, team up in an escape room, and connect over Korean dinner.',
      scheduleTitle: 'Schedule',
      schedule: [
        { time: '2:30 – 3:50 PM', activity: 'Cafe icebreaking', place: 'Nearby cafe planned' },
        { time: '4:00 – 6:00 PM', activity: 'Escape room mission', place: 'Breakout Escape Hongdae planned' },
        { time: '6:00 – 8:00 PM', activity: 'Korean dinner', place: 'Korean BBQ planned' },
        { time: 'After 8:00 PM', activity: 'Optional afterparty', place: 'For those who want to join' }
      ],
      includedTitle: 'What’s included',
      included: ['Cafe drink', 'Escape room fee', 'Korean dinner', 'Team matching', 'Hosted experience', 'Event operation'],
      excludedTitle: 'Not included',
      excluded: ['Optional afterparty after 8 PM', 'Extra personal orders'],
      priceTitle: 'Price',
      prices: [
        { name: 'Regular', price: '₩69,000 / $51' },
        { name: 'Early Bird', price: '₩59,000 / $43' },
        { name: 'Returning KONNECT Participant', price: '₩64,000 / $47' },
        { name: 'Bring a Friend', price: '₩59,000 / $43 per person' }
      ],
      discountNote: 'Discounts cannot be combined.',
      whoTitle: 'Who is this for?',
      who: [
        'People who want to make international friends in Seoul',
        'Internationals who want to meet Korean friends',
        'Anyone who prefers activity-based meetups over free talking',
        'People who want to practice Korean or English naturally',
        'Fans of escape rooms, team games, and social dinners'
      ],
      faqTitle: 'FAQ',
      faqs: [
        { q: 'Can I come alone?', a: 'Yes. Many participants come alone, and the host will help you join a team naturally through icebreaking.' },
        { q: 'Do I need to be fluent in Korean or English?', a: 'No. You do not need perfect language skills. A friendly attitude and willingness to communicate are enough.' },
        { q: 'What is included in the price?', a: 'Cafe drink, escape room fee, Korean dinner, team matching, hosted experience, and event operation are included.' },
        { q: 'Is the afterparty required?', a: 'No. Anything after 8 PM is optional and paid separately.' },
        { q: 'Can I get a refund?', a: 'The standard refund policy applies, but special-event reservation rules may apply first. Please check the sign-up page for details.' }
      ],
      finalTitle: 'One afternoon. Three experiences. One global community.',
      finalSub: 'Join KONNECT Escape Night and solve missions with new friends in Seoul.'
    }
  },

  // ── 결제 링크 + 버튼 라벨 ─────────────────────
  PAYMENT_LINKS: {
    regular: {
      kr: {
        kakao: 'https://qr.kakaopay.com/Ej8tO05RY271006015',
        labelKo: '결제하기 (₩20,000) →',
        labelEn: 'Pay ₩20,000 →'
      },
      intl: {
        stripe: 'https://buy.stripe.com/3cI00j0jK72Y85R9xifw40e',
        paypal: 'https://www.paypal.com/ncp/payment/UPBSVATMW2SPJ',
        kakao: 'https://qr.kakaopay.com/Ej8tO05RY271006015',
        labelKo: 'Pay $16 →',
        labelEn: 'Pay $16 →'
      }
    },

escape: {
  regular: {
    kr: {
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY86c404077',
      labelKo: '결제하기 (₩69,000) →',
      labelEn: 'Pay ₩69,000 →'
    },
    intl: {
      stripe: 'https://buy.stripe.com/4gM7sLgiI9b6adZ38Ufw40h',
      paypal: 'https://www.paypal.com/ncp/payment/UASVVC8GQTLLW',
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY86c404077',
      labelKo: 'Pay $51 →',
      labelEn: 'Pay $51 →'
    }
  },
  earlybird: {
    kr: {
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY733c04255',
      labelKo: '얼리버드 결제하기 (₩59,000) →',
      labelEn: 'Pay Early Bird Price (₩59,000) →'
    },
    intl: {
      stripe: 'https://buy.stripe.com/eVq5kD5E43QM1Ht4cYfw40i',
      paypal: 'https://www.paypal.com/ncp/payment/L5B8RS8X9LA3E',
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY733c04255',
      labelKo: 'Pay Early Bird Price ($43) →',
      labelEn: 'Pay Early Bird Price ($43) →'
    }
  }
},

    coupons: {
      regular: {
        FRIEND: {
        kr: {
          kakao: 'https://qr.kakaopay.com/Ej8tO05RY1d4c05439',
          labelKo: '쿠폰가로 결제하기 (₩15,000) →',
          labelEn: 'Pay Discounted Price (₩15,000) →'
        },
        intl: {
          stripe: 'https://buy.stripe.com/5kQ5kD6I872Y1Ht5h2fw40f',
          paypal: 'https://www.paypal.com/ncp/payment/XXYQBR9CK3C5S',
          kakao: 'https://qr.kakaopay.com/Ej8tO05RY1d4c05439',
          labelKo: 'Pay Discounted Price ($12) →',
          labelEn: 'Pay Discounted Price ($12) →'
        },
          messageKo: '정기모임 친구 초대 할인이 적용되었습니다.',
          messageEn: 'Regular meetup friend discount applied.'
        },
        RETURN: {
          kr: {
            kakao: 'https://qr.kakaopay.com/Ej8tO05RY1d4c05439',
            labelKo: '기존 참가자 할인 결제하기 (₩15,000) →',
            labelEn: 'Pay Returning Member Discount (₩15,000) →'
          },
          intl: {
            stripe: 'https://buy.stripe.com/5kQ5kD6I872Y1Ht5h2fw40f',
            paypal: 'https://www.paypal.com/ncp/payment/XXYQBR9CK3C5S',
            kakao: 'https://qr.kakaopay.com/Ej8tO05RY1d4c05439',
            labelKo: 'Pay Returning Member Discount ($12) →',
            labelEn: 'Pay Returning Member Discount ($12) →'
          },
          messageKo: '정기모임 기존 참가자 할인이 적용되었습니다.',
          messageEn: 'Regular meetup returning member discount applied.'
        }
      },
escape: {
  FRIEND: {
    kr: {
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY733c04255',
      labelKo: '친구 할인 결제하기 (₩59,000) →',
      labelEn: 'Pay Friend Price (₩59,000) →'
    },
    intl: {
      stripe: 'https://buy.stripe.com/eVq5kD5E43QM1Ht4cYfw40i',
      paypal: 'https://www.paypal.com/ncp/payment/L5B8RS8X9LA3E',
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY733c04255',
      labelKo: 'Pay Friend Price ($43) →',
      labelEn: 'Pay Friend Price ($43) →'
    },
    messageKo: '방탈출 친구 할인 쿠폰이 적용되었습니다.',
    messageEn: 'Escape Night friend discount applied.'
  },
  RETURN: {
    kr: {
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY7d0009738',
      labelKo: '기존 참가자 할인 결제하기 (₩64,000) →',
      labelEn: 'Pay Returning Member Price (₩64,000) →'
    },
    intl: {
      stripe: 'https://buy.stripe.com/4gM28r6I82MI71N7pafw40g',
      paypal: 'https://www.paypal.com/ncp/payment/C72CKAA7JRTPN',
      kakao: 'https://qr.kakaopay.com/Ej8tO05RY7d0009738',
      labelKo: 'Pay Returning Member Price ($47) →',
      labelEn: 'Pay Returning Member Price ($47) →'
    },
    messageKo: '방탈출 기존 참가자 할인이 적용되었습니다.',
    messageEn: 'Escape Night returning participant discount applied.'
  }
}
    }
  },

  // ── 얼리버드 할인 ───────────────────────────
  EARLY_BIRD: {
    escape: {
      enabled: true,
      end: '2026-06-14T00:00:00+09:00'
    }
  },

  // ── 계좌이체 ───────────────────────────────
  BANK: '카카오뱅크',
  BANK_EN: 'KakaoBank',
  ACCOUNT: '3333-33-7607681',
  ACCOUNT_HOLDER: '안형욱(코지 Kozy)',
  ACCOUNT_HOLDER_EN: 'Ahn Hyeonguk (Kozy)'
};

// =============================================
//   아래는 수정하지 마세요
// =============================================

function _derive(iso) {
  const d   = new Date(iso);
  const MM  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DDE = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const DDK = '일월화수목금토';
  const m=d.getMonth(), day=d.getDate(), dow=d.getDay(), y=d.getFullYear();
  const h=d.getHours(), min=d.getMinutes();
  const h12=h%12||12, minS=':'+String(min).padStart(2,'0');
  const end = new Date(CONFIG.NEXT_MEETUP_END_DATE || iso);
  const eh = end.getHours(), emin = end.getMinutes();
  const eh12 = eh % 12 || 12, eminS = ':' + String(emin).padStart(2,'0');

const timeKo = `${h<12?'오전':'오후'} ${h12}${minS} – ${eh<12?'오전':'오후'} ${eh12}${eminS}`;
const timeEn = `${h12}${minS} ${h<12?'AM':'PM'} – ${eh12}${eminS} ${eh<12?'AM':'PM'}`;
  return {
    ko:{
      title: `언어교환 — ${y}년 ${m+1}월`,
      date: `${m+1}월 ${day}일 ${DDK[dow]}요일`,
      time: timeKo,
      location: CONFIG.LOCATION_KO,
      evDate: `📍 ${CONFIG.LOCATION_KO} · ${m+1}월 ${day}일 ${DDK[dow]}요일 · ${timeKo}`,
      ctaKr: CONFIG.PAYMENT_LINKS.regular.kr.labelKo,
      ctaIntl: CONFIG.PAYMENT_LINKS.regular.intl.labelKo
    },
    en:{
      title: `Language Exchange — ${MM[m]} ${y}`,
      date: `${DDE[dow]}, ${MM[m]} ${day}`,
      time: timeEn,
      location: CONFIG.LOCATION_EN,
      evDate: `📍 ${CONFIG.LOCATION_EN} · ${DDE[dow]}, ${MM[m]} ${day} · ${timeEn}`,
      ctaKr: CONFIG.PAYMENT_LINKS.regular.kr.labelEn,
      ctaIntl: CONFIG.PAYMENT_LINKS.regular.intl.labelEn
    }
  };
}

function _set(selector, text) {
  document.querySelectorAll(selector).forEach(el => {
    if (text !== undefined && text !== null) el.textContent = text;
  });
}

function applyConfig(forceLang) {
  const lang = forceLang || localStorage.getItem('konnect-lang') ||
    ((navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en');
  const M = _derive(CONFIG.NEXT_MEETUP_DATE);
  const v = M[lang];
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('event') || 'regular';

  try { if (typeof NEXT_MEETUP !== 'undefined') NEXT_MEETUP = new Date(CONFIG.NEXT_MEETUP_DATE); } catch(e) {}

  // index.html 정기모임 카드
  _set('[data-i18n="evTitle"]',  v.title);
  _set('[data-i18n="evDate"]',   v.evDate);
  _set('[data-i18n="evCta1"]',   v.ctaKr);
  _set('[data-i18n="evCta2"]',   v.ctaIntl);

  document.querySelectorAll('[data-i18n="evSpots"]').forEach(el => {
    const wrap = el.closest('.event-spots');
    if (CONFIG.SPOTS_LEFT) {
      if (wrap) wrap.style.display = '';
      el.textContent = lang==='ko' ? `잔여 ${CONFIG.SPOTS_LEFT}자리` : `${CONFIG.SPOTS_LEFT} spots remaining`;
    } else if (wrap) {
      wrap.style.display = 'none';
    }
  });

  // index.html 방탈출 티저
  const E = CONFIG.ESCAPE?.[lang] || CONFIG.ESCAPE?.en;
  if (E) {
    _set('[data-escape-date]', E.date);
    _set('[data-escape-location]', E.location);
    _set('[data-escape-price]', E.earlyBirdPrice ? `${E.earlyBirdPrice} Early Bird` : E.price);
    _set('[data-escape-title]', E.shortTitle || E.title);
    _set('[data-escape-desc]', E.subtitle);
    document.querySelectorAll('[data-escape-detail-link]').forEach(el => {
      el.href = CONFIG.ESCAPE.detailLink || 'escape.html';
    });
  }

  // join.html 정기모임 정보는 regular일 때만 직접 업데이트
  if (eventId !== 'escape') {
    _set('#ev1', lang==='ko' ? CONFIG.REGULAR.ko.title : CONFIG.REGULAR.en.title);
    _set('#ev2', v.date);
    _set('#ev3', v.time);
    _set('#ev4', v.location);
    _set('#pay-kr-btn', lang==='ko' ? CONFIG.PAYMENT_LINKS.regular.kr.labelKo : CONFIG.PAYMENT_LINKS.regular.kr.labelEn);
    _set('#pay-intl-btn', lang==='ko' ? CONFIG.PAYMENT_LINKS.regular.intl.labelKo : CONFIG.PAYMENT_LINKS.regular.intl.labelEn);
  }

  if (typeof T !== 'undefined') {
    ['ko','en'].forEach(l => {
      if (!T[l]) return;
      T[l].evTitle = M[l].title;
      T[l].evDate  = M[l].evDate;
      T[l].evCta1  = M[l].ctaKr;
      T[l].evCta2  = M[l].ctaIntl;
      T[l].evSpots = CONFIG.SPOTS_LEFT
        ? (l==='ko'?`잔여 ${CONFIG.SPOTS_LEFT}자리`:`${CONFIG.SPOTS_LEFT} spots remaining`)
        : '';
    });
  }

  document.querySelectorAll('[data-account]').forEach(el=>el.textContent=CONFIG.BANK+' '+CONFIG.ACCOUNT);
  document.querySelectorAll('[data-account-holder]').forEach(el=>el.textContent=CONFIG.ACCOUNT_HOLDER);
  document.querySelectorAll('[data-account-en]').forEach(el=>el.textContent=CONFIG.BANK_EN+' '+CONFIG.ACCOUNT);
  document.querySelectorAll('[data-account-holder-en]').forEach(el=>el.textContent=CONFIG.ACCOUNT_HOLDER_EN);
}

document.addEventListener('DOMContentLoaded', applyConfig);

document.addEventListener('DOMContentLoaded', function() {
  if (typeof setLang === 'function') {
    const _orig = setLang;
    window.setLang = function(lang) {
      localStorage.setItem('konnect-lang', lang);
      _orig(lang);
      setTimeout(() => applyConfig(lang), 0);
    };
  }
});
