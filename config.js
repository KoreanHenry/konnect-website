// =============================================
//   KONNECT 설정 파일
//   자주 바뀌는 내용은 여기서만 수정하세요
// =============================================

const CONFIG = {

  // ── 다음 모임 ──────────────────────────────
  // 날짜 형식: 'YYYY-MM-DDTHH:MM:SS+09:00'
  NEXT_MEETUP_DATE: '2026-05-30T14:30:00+09:00',

  // 잔여 자리: 숫자 문자열 ('8') 또는 빈 문자열 ('') = 표시 안 함
  SPOTS_LEFT: '',

  // 이벤트 카드에 표시되는 날짜 텍스트 (한/영)
  EVENT_DATE_KO: '5월 30일 토요일',
  EVENT_DATE_EN: 'Saturday, May 30',


  // ── 결제 링크 ──────────────────────────────
  // 카카오페이 개인 송금 링크 (qr.kakaopay.com/...)
  KAKAO_PAY: 'https://qr.kakaopay.com/여기에_카카오페이_링크',

  // Stripe 결제 링크 (buy.stripe.com/...)
  STRIPE: 'https://buy.stripe.com/3cI00j0jK72Y85R9xifw40e',

  // PayPal 결제 링크
  PAYPAL: 'https://www.paypal.com/ncp/payment/UPBSVATMW2SPJ',


  // ── 계좌이체 ───────────────────────────────
  BANK: '카카오뱅크',
  ACCOUNT: '3333-33-7607681',
  ACCOUNT_HOLDER: '안형욱(코지 Kozy)',


  // ── 방탈출 모임 ────────────────────────────
  ESCAPE_DATE_KO: '6월 20일 (금)',
  ESCAPE_DATE_EN: 'June 20 (Fri)',
  ESCAPE_TIME_KO: '오후 2:30 - 8:00',
  ESCAPE_TIME_EN: '2:30 PM - 8:00 PM',
  ESCAPE_LOCATION_KO: '홍대',
  ESCAPE_LOCATION_EN: 'Hongdae',
  ESCAPE_PRICE_KO: '₩60,000',
  ESCAPE_PRICE_EN: '$42 USD',
  ESCAPE_LINK: 'join.html?event=escape',

};


// =============================================
//   아래 코드는 수정하지 마세요
// =============================================
function applyConfig() {
  // 다음 모임 카운트다운 날짜
  if (window.setNextMeetup) setNextMeetup(CONFIG.NEXT_MEETUP_DATE);

  // 잔여 자리
  const spotEls = document.querySelectorAll('[data-spots]');
  spotEls.forEach(el => {
    if (CONFIG.SPOTS_LEFT) {
      el.textContent = CONFIG.SPOTS_LEFT + (el.dataset.spotsUnit || ' spots remaining');
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  // 결제 링크
  const kakaoBtns = document.querySelectorAll('[data-pay="kakao"]');
  kakaoBtns.forEach(el => el.href = CONFIG.KAKAO_PAY);

  const stripeBtns = document.querySelectorAll('[data-pay="stripe"]');
  stripeBtns.forEach(el => el.href = CONFIG.STRIPE);

  const paypalBtns = document.querySelectorAll('[data-pay="paypal"]');
  paypalBtns.forEach(el => el.href = CONFIG.PAYPAL);

  // 계좌이체
  document.querySelectorAll('[data-account]').forEach(el => {
    el.textContent = CONFIG.BANK + ' ' + CONFIG.ACCOUNT;
  });
  document.querySelectorAll('[data-account-holder]').forEach(el => {
    el.textContent = CONFIG.ACCOUNT_HOLDER;
  });

  // 방탈출 날짜 (한/영 자동)
  const lang = document.documentElement.lang || 'en';
  document.querySelectorAll('[data-escape-date]').forEach(el => {
    el.textContent = lang === 'ko' ? CONFIG.ESCAPE_DATE_KO : CONFIG.ESCAPE_DATE_EN;
  });
  document.querySelectorAll('[data-escape-meta]').forEach(el => {
    if (lang === 'ko') {
      el.textContent = CONFIG.ESCAPE_DATE_KO + ' · ' + CONFIG.ESCAPE_LOCATION_KO + ' · ' + CONFIG.ESCAPE_PRICE_KO;
    } else {
      el.textContent = CONFIG.ESCAPE_DATE_EN + ' · ' + CONFIG.ESCAPE_LOCATION_EN + ' · ' + CONFIG.ESCAPE_PRICE_EN;
    }
  });
}

document.addEventListener('DOMContentLoaded', applyConfig);
