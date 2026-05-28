// =============================================
//   KONNECT 설정 파일
// =============================================
//
//   ✏️  날짜/시간 변경 방법:
//   NEXT_MEETUP_DATE 하나만 바꾸세요.
//   형식: 'YYYY-MM-DDTHH:MM:SS+09:00'
//   예시: 2026-06-09 오후 1시 30분
//        → '2026-06-09T13:30:00+09:00'
// =============================================

const CONFIG = {

  // ✏️ 다음 정기 모임 날짜+시간
  NEXT_MEETUP_DATE: '2026-05-30T13:30:00+09:00',

  // ✏️ 잔여 자리: 숫자 ('8') 또는 '' = 표시 안 함
  SPOTS_LEFT: '',

  // ✏️ 장소
  LOCATION_KO: '시청역 근처',
  LOCATION_EN: 'City Hall Station',

  // ✏️ 참가비
  PRICE_KR:   '₩20,000',
  PRICE_INTL: '$16',


  // ── 방탈출 ─────────────────────────────────
  ESCAPE: {
    link: 'join.html?event=escape',
    ko: {
      badge:'신청 오픈', title:'방탈출 나이트',
      date:'6월 20일 (금)', time:'오후 2:30 – 8:00',
      location:'홍대', price:'₩30,000',
      scheduleTitle:'타임라인',
      schedule:[
        '14:30 — 카페에서 만남 + 아이스브레이킹 (1~1.5시간)',
        '16:00 — 방탈출 카페로 이동',
        '17:30 – 18:00 — 방탈출 진행',
        '— 식당으로 이동 후 저녁 식사',
        '— 자율 2차 뒤풀이',
      ],
      note:'취향에 따라 방탈출 테마를 배정해드려요', cta:'신청하기 →',
      pageTag:'방탈출 나이트', pageTitle:'방탈출 신청하기',
      pageSub:'폼을 작성하고 결제를 완료하면 자리가 확정됩니다.',
      ctaKr:'₩30,000 결제하기 →', ctaIntl:'외국인 ($22)',
    },
    en: {
      badge:'Open Now', title:'Escape Room Night',
      date:'June 20 (Fri)', time:'2:30 PM – 8:00 PM',
      location:'Hongdae', price:'$22 USD',
      scheduleTitle:'Schedule',
      schedule:[
        '2:30 PM — Meet at cafe + icebreaking (1~1.5 hrs)',
        '4:00 PM — Move to escape room cafe',
        '5:30 – 6:00 PM — Escape room',
        '— Dinner together',
        '— Optional afterparty',
      ],
      note:'Themes matched to your preference', cta:'Sign up →',
      pageTag:'Escape Room Night', pageTitle:'Sign up — Escape Room',
      pageSub:'Fill out the form and complete payment to join!',
      ctaKr:'Pay ₩30,000 →', ctaIntl:'Pay $22 USD →',
    },
  },


  // ── 결제 ───────────────────────────────────
  KAKAO_PAY:        'https://qr.kakaopay.com/여기에_카카오페이_링크',
  STRIPE:           'https://buy.stripe.com/3cI00j0jK72Y85R9xifw40e',
  PAYPAL:           'https://www.paypal.com/ncp/payment/UPBSVATMW2SPJ',
  ESCAPE_KAKAO_PAY: 'https://qr.kakaopay.com/여기에_방탈출_링크',
  ESCAPE_STRIPE:    'https://buy.stripe.com/여기에_방탈출_링크',
  BANK:           '카카오뱅크',
  ACCOUNT:        '3333-33-7607681',
  ACCOUNT_HOLDER: '안형욱(코지 Kozy)',

};


// =============================================
//   아래는 수정하지 마세요
// =============================================

function _derive(iso) {
  const d   = new Date(iso);
  const MM  = ['January','February','March','April','May','June',
               'July','August','September','October','November','December'];
  const DDE = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const DDK = '일월화수목금토';
  const m=d.getMonth(), day=d.getDate(), dow=d.getDay(), y=d.getFullYear();
  const h=d.getHours(), min=d.getMinutes();
  const h12=h%12||12, minS=':'+String(min).padStart(2,'0');
  return {
    ko:{
      title:    `언어교환 — ${y}년 ${m+1}월`,
      date:     `${m+1}월 ${day}일 ${DDK[dow]}요일`,
      time:     `${h<12?'오전':'오후'} ${h12}${minS}`,
      location: CONFIG.LOCATION_KO,
      evDate:   `📍 ${CONFIG.LOCATION_KO} · ${m+1}월 ${day}일 ${DDK[dow]}요일 · ${h<12?'오전':'오후'} ${h12}${minS}`,
      ctaKr:    `한국인 자리 (${CONFIG.PRICE_KR}) →`,
      ctaIntl:  `외국인 (${CONFIG.PRICE_INTL})`,
    },
    en:{
      title:    `Language Exchange — ${MM[m]} ${y}`,
      date:     `${DDE[dow]}, ${MM[m]} ${day}`,
      time:     `${h12}${minS} ${h<12?'AM':'PM'}`,
      location: CONFIG.LOCATION_EN,
      evDate:   `📍 ${CONFIG.LOCATION_EN} · ${DDE[dow]}, ${MM[m]} ${day} · ${h12}${minS} ${h<12?'AM':'PM'}`,
      ctaKr:    `Reserve Korean (${CONFIG.PRICE_KR}) →`,
      ctaIntl:  `International (${CONFIG.PRICE_INTL}) →`,
    },
  };
}

// DOM 직접 업데이트 (T 객체 의존 없음)
function _set(selector, text) {
  document.querySelectorAll(selector).forEach(el => {
    if (el.tagName === 'A' || el.tagName === 'BUTTON') el.textContent = text;
    else el.textContent = text;
  });
}

function applyConfig() {
  const lang = localStorage.getItem('konnect-lang') ||
    (navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en');
  const M = _derive(CONFIG.NEXT_MEETUP_DATE);
  const v = M[lang];

  // ① 카운트다운
  try { if (typeof NEXT_MEETUP !== 'undefined') NEXT_MEETUP = new Date(CONFIG.NEXT_MEETUP_DATE); } catch(e) {}

  // ② index.html 이벤트 카드 직접 업데이트
  _set('[data-i18n="evTitle"]',  v.title);
  _set('[data-i18n="evDate"]',   v.evDate);
  _set('[data-i18n="evCta1"]',   v.ctaKr);
  _set('[data-i18n="evCta2"]',   v.ctaIntl);

  // 잔여 자리
  document.querySelectorAll('[data-i18n="evSpots"]').forEach(el => {
    const wrap = el.closest('.event-spots');
    if (CONFIG.SPOTS_LEFT) {
      if (wrap) wrap.style.display = '';
      el.textContent = lang==='ko' ? `잔여 ${CONFIG.SPOTS_LEFT}자리` : `${CONFIG.SPOTS_LEFT} spots remaining`;
    } else {
      if (wrap) wrap.style.display = 'none';
    }
  });

  // ③ join.html 이벤트 정보 직접 업데이트
  _set('#ev1', lang==='ko' ? '언어교환 모임' : 'Language Exchange');
  _set('#ev2', v.date);
  _set('#ev3', v.time);
  _set('#ev4', v.location);
  _set('#pay-kr-btn',   v.ctaKr);
  _set('#pay-intl-btn', v.ctaIntl);

  // ④ T 객체도 업데이트 (setLang 재호출용)
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

  // ⑤ 결제 링크
  document.querySelectorAll('[data-pay="kakao"]').forEach(el=>el.href=CONFIG.KAKAO_PAY);
  document.querySelectorAll('[data-pay="stripe"]').forEach(el=>el.href=CONFIG.STRIPE);
  document.querySelectorAll('[data-pay="paypal"]').forEach(el=>el.href=CONFIG.PAYPAL);

  // ⑥ 계좌이체
  document.querySelectorAll('[data-account]').forEach(el=>el.textContent=CONFIG.BANK+' '+CONFIG.ACCOUNT);
  document.querySelectorAll('[data-account-holder]').forEach(el=>el.textContent=CONFIG.ACCOUNT_HOLDER);
}

// DOMContentLoaded + 언어 변경 시 재실행
document.addEventListener('DOMContentLoaded', applyConfig);

// setLang 래핑 (언어 전환 시 재적용)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof setLang === 'function') {
    const _orig = setLang;
    window.setLang = function(lang) {
      _orig(lang);
      setTimeout(applyConfig, 0);
    };
  }
});
