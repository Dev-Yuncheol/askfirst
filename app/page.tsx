// @ts-ignore
import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export default function Home() {
  const aiResponses = [
    {
      image: "/avatar-design-student-f20.png",
      persona: "디자인 중시 20대 여대생",
      quote: "디자인은 깔끔한데, 가방에 넣었을 때 부피가 걱정돼요.",
      tags: ["디자인", "휴대성"],
    },
    {
      image: "/avatar-practical-worker-m30.png",
      persona: "꼼꼼한 30대 직장인",
      quote: "풍량은 좋아 보이지만, 사무실에서 쓸 때 소음이 궁금해요.",
      tags: ["풍량", "소음"],
    },
    {
      image: "/avatar-value-owner-m40.png",
      persona: "가성비 중시 40대 자영업",
      quote: "가격 대비 배터리 20시간이면 설득력은 있어요.",
      tags: ["가격", "배터리"],
    },
    {
      image: "/avatar-eco-freelancer-f30.png",
      persona: "환경 가치 30대 프리랜서",
      quote: "교체형 배터리나 수리 가능 여부가 있으면 더 끌릴 것 같아요.",
      tags: ["지속가능성", "수명"],
    },
  ];

  const insightBars = [
    { label: "풍량 만족", value: 71 },
    { label: "휴대성", value: 58 },
    { label: "배터리 지속", value: 43 },
  ];

  return (
    <>
      <main className="min-h-screen bg-[#fbfcfe]">
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="/" aria-label="미리 묻다 홈">
            <img className="brand-mark" src="/logo-mark.svg" alt="" width="48" height="48" />
            <span className="brand-name">미리 묻다</span>
          </a>
          <nav className="primary-nav" aria-label="주요 메뉴">
            <a href="#service">서비스 소개</a>
            <a href="#insight">인사이트</a>
            <a href="#faq">자주 묻는 질문</a>
          </nav>
          <div className="account-nav">
            <a className="login-link" href="#login">로그인</a>
            <a className="start-button" href="#start">무료로 시작하기</a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="메뉴 열기"><span /><span /><span /></summary>
            <div className="mobile-menu-panel">
              <a href="#service">서비스 소개</a>
              <a href="#insight">인사이트</a>
              <a href="#faq">자주 묻는 질문</a>
              <a href="#login">로그인</a>
              <a className="mobile-start-button" href="#start">무료로 시작하기</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero-section" id="service">
        <div className="hero-container">
          <div className="hero-copy">
            <h1>출시 전에, 고객에게 먼저 묻다</h1>
            <p className="hero-description">상품 정보를 입력하면 다양한 AI 고객이 구매자의 시선으로 답합니다.</p>
            <div className="hero-actions">
              <a className="hero-primary-button" id="start" href="#closing-cta">무료로 의견 받아보기</a>
              <a className="hero-secondary-button" href="#report">데모 살펴보기</a>
            </div>
          </div>

          <div className="hero-flow" aria-label="상품 정보가 AI 고객 의견과 핵심 인사이트로 연결되는 과정">
            <div className="hero-flow-stage hero-flow-product">
              <p className="hero-flow-label">신제품 콘셉트 분석</p>
              <article className="hero-product-panel">
                <p className="hero-status"><span aria-hidden="true" />제출 완료</p>
                <div className="hero-product-image">
                  <img src="/product-portable-fan-white.png" alt="화이트 휴대용 선풍기" />
                </div>
                <div className="hero-product-meta">
                  <strong>화이트 휴대용 선풍기</strong>
                  <span>3단 풍속, 최대 20시간 사용</span>
                </div>
                <dl className="hero-product-specs">
                  <div><dt>카테고리</dt><dd>생활가전</dd></div>
                  <div><dt>타깃 고객</dt><dd>20-40대 직장인·학생</dd></div>
                  <div><dt>가격</dt><dd>39,000원</dd></div>
                  <div><dt>핵심 강점</dt><dd>저소음, 장시간 배터리, USB-C</dd></div>
                  <div><dt>출시 예정</dt><dd>2026.08</dd></div>
                </dl>
              </article>
            </div>

            <div className="hero-flow-connector hero-flow-connector-left" aria-hidden="true">
              <span className="hero-flow-line" />
              <span className="hero-flow-node" />
            </div>

            <div className="hero-flow-stage hero-flow-customers">
              <p className="hero-flow-label">12명의 AI 고객 응답 중</p>
              <div className="hero-response-grid">
                <div className="hero-response-branches" aria-hidden="true" />
                <div className="hero-ai-core" aria-hidden="true">✦</div>
                {aiResponses.map((response) => (
                  <article className="hero-response-card" key={response.persona}>
                    <header>
                      <img src={response.image} alt="" />
                      <strong>{response.persona}</strong>
                    </header>
                    <p>“{response.quote}”</p>
                    <ul>
                      {response.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-flow-connector hero-flow-connector-right" aria-hidden="true">
              <span className="hero-flow-node" />
              <span className="hero-flow-line" />
            </div>

            <div className="hero-flow-stage hero-flow-insight" id="insight">
              <p className="hero-flow-label">핵심 인사이트 요약</p>
              <article className="hero-insight-panel">
                <div className="hero-insight-summary">
                  <span className="hero-insight-icon" aria-hidden="true">✦</span>
                  <p>풍량과 휴대성에 대한 기대가 가장 높았어요.</p>
                </div>
                <ul className="hero-insight-bars">
                  {insightBars.map((bar) => (
                    <li key={bar.label}>
                      <div>
                        <strong>{bar.label}</strong>
                        <b>{bar.value}%</b>
                      </div>
                      <i style={{ ["--bar" as string]: `${bar.value}%` }} />
                    </li>
                  ))}
                </ul>
                <div className="hero-insight-notes">
                  <strong>공통 의견</strong>
                  <ul>
                    <li>저소음이면 사무실·카페에서도 자주 쓸 것 같아요.</li>
                    <li>배터리 지속 시간과 거치 방식이 구매 결정에 영향을 줘요.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section" id="how-it-works">
        <div className="solution-container">
          <aside className="solution-intro">
            <p className="solution-kicker">HOW IT WORKS</p>
            <span className="solution-kicker-line" aria-hidden="true" />
            <h2>질문 하나가<br />판단의 근거가 됩니다</h2>
            <p className="solution-intro-copy">상품의 맥락을 이해하고,<br />서로 다른 구매자 관점으로 검토한 뒤,<br />바로 실행할 인사이트로 정리합니다.</p>
            <a href="#solution-hub">작동 방식 자세히 보기 <span aria-hidden="true">→</span></a>
          </aside>

          <div className="solution-step solution-product-step">
            <header className="solution-step-heading"><b>01</b><h3>상품 정보 입력</h3></header>
            <article className="carry-brief">
              <div className="carry-image-wrap">
                <img src="/product-carry-on-20in.png" alt="20인치 화이트 캐리어" />
              </div>
              <div className="carry-copy">
                <span>상품 브리프</span>
                <strong>미리 캐리어<br />20인치</strong>
                <ul>
                  <li>가벼운 폴리카보네이트 소재</li>
                  <li>360° 더블 휠</li>
                  <li>TSA 잠금장치</li>
                  <li>생활 방수</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="solution-step solution-hub-step" id="solution-hub">
            <header className="solution-step-heading"><b>02</b><h3>합성 고객 검토</h3></header>
            <div className="hub-diagram" aria-label="중앙 허브에서 여덟 명의 합성 고객으로 연결되는 방사형 구조">
              <div className="hub-guide hub-guide-outer" aria-hidden="true" />
              <div className="hub-guide hub-guide-inner" aria-hidden="true" />
              <div className="hub-spokes" aria-hidden="true">
                <span className="hub-spoke spoke-1" /><span className="hub-spoke spoke-2" />
                <span className="hub-spoke spoke-3" /><span className="hub-spoke spoke-4" />
                <span className="hub-spoke spoke-5" /><span className="hub-spoke spoke-6" />
                <span className="hub-spoke spoke-7" /><span className="hub-spoke spoke-8" />
              </div>
              <div className="hub-center">
                <span>8가지 합성 고객</span>
                <strong>다양한 관점으로<br />의견 생성</strong>
                <i aria-hidden="true">“</i>
              </div>
              <div className="hub-avatar hub-avatar-1"><img src="/avatar-value-student-f20.png" alt="" /><strong>가성비 중시 대학생</strong><span>실용성과 가격 민감</span></div>
              <div className="hub-avatar hub-avatar-2"><img src="/avatar-newlywed-traveler-f30.png" alt="" /><strong>신혼여행 준비 커플</strong><span>내구성과 수납력 중시</span></div>
              <div className="hub-avatar hub-avatar-3"><img src="/avatar-overseas-traveler-m30.png" alt="" /><strong>해외 출장자</strong><span>보안과 이동성 중시</span></div>
              <div className="hub-avatar hub-avatar-4"><img src="/avatar-premium-consumer-m60.png" alt="" /><strong>프리미엄 소비자</strong><span>브랜드와 품질 중시</span></div>
              <div className="hub-avatar hub-avatar-5"><img src="/avatar-eco-consumer-f30.png" alt="" /><strong>친환경 가치 소비자</strong><span>소재와 지속가능성 중시</span></div>
              <div className="hub-avatar hub-avatar-6"><img src="/avatar-social-traveler-f20.png" alt="" /><strong>SNS 활동 여행자</strong><span>스타일과 인증샷 중시</span></div>
              <div className="hub-avatar hub-avatar-7"><img src="/avatar-family-traveler-f50.png" alt="" /><strong>부모 동반 여행자</strong><span>편의성과 안전 중시</span></div>
              <div className="hub-avatar hub-avatar-8"><img src="/avatar-minimal-worker-m30.png" alt="" /><strong>미니멀 직장인</strong><span>디자인과 휴대성 중시</span></div>
            </div>
          </div>

          <div className="solution-step solution-insight-step">
            <header className="solution-step-heading"><b>03</b><h3>구매 인사이트 도출</h3></header>
            <article className="solution-result-card">
              <div className="result-badge">★</div>
              <span>추천 인사이트</span>
              <h3>구매 추천</h3>
              <p>대부분의 고객 관점에서<br />높은 만족도가 예측됩니다.</p>
              <div className="result-divider" />
              <strong>핵심 근거</strong>
              <ul><li>가성비와 내구성에 긍정 의견</li><li>휴대성·디자인 만족도 높음</li><li>여행 상황에서 실용성 확보</li></ul>
              <div className="result-score">
                <span>전체 합성 소비자 평균 만족도</span>
                <b>+1.35 <small>/ 2</small></b>
                <i><em /></i>
                <p className="result-scale-note">*-2는 불만족, 0은 보통, +2는 만족을 나타냅니다.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="insight-results-section" id="report">
        <div className="insight-results-container">
          <div className="report-showcase">
            <article className="report-paper" aria-label="신제품 구매 의향 리포트 첫 페이지">
              <header className="report-header">
                <div><span>AI CUSTOMER RESEARCH</span><h2>신제품 구매 의향 리포트</h2></div>
                <dl><div><dt>조사 기간</dt><dd>2026.07.21</dd></div><div><dt>응답자 수</dt><dd>30명 · 합성 고객</dd></div></dl>
              </header>

              <section className="report-block">
                <h3>구매 의향</h3>
                <div className="purchase-bar"><b>68%</b><b>22%</b><b>10%</b></div>
                <div className="purchase-legend"><span><i className="legend-positive" />긍정 <small>구매 의향 있음</small></span><span><i className="legend-neutral" />중립 <small>상황에 따라 다름</small></span><span><i className="legend-negative" />부정 <small>구매 의향 낮음</small></span></div>
              </section>

              <section className="report-block persona-report-block">
                <h3>페르소나별 의견</h3>
                <div className="report-personas">
                  <article><span>실용 추구형 <b>32%</b></span><p>“수납이 간결하고<br />사용이 편해 보여요.”</p></article>
                  <article className="is-highlighted"><span>가성비 중시형 <b>28%</b></span><p>“가격은 괜찮지만<br />내구성이 궁금해요.”</p></article>
                  <article><span>신중 구매형 <b>22%</b></span><p>“다른 제품과 비교 후<br />결정할 것 같아요.”</p></article>
                </div>
              </section>

              <section className="report-block matrix-report-block">
                <h3>기대 요인 vs 망설임 요인 <small>우선순위 매트릭스</small></h3>
                <div className="report-matrix">
                  <div><span className="matrix-dot blue" />프리미엄 소재</div>
                  <div className="matrix-focus"><span className="matrix-dot navy" />내구성 <span className="matrix-dot blue" />디자인·휴대성</div>
                  <div><span className="matrix-dot gray" />색상 옵션</div>
                  <div className="matrix-risk"><span className="matrix-dot red" />가격 경쟁력<br /><span className="matrix-dot red" />상세 정보 부족</div>
                </div>
                <div className="matrix-axis"><span>낮은 언급 빈도</span><span>높은 언급 빈도 →</span></div>
              </section>
            </article>
          </div>

          <div className="insight-results-copy">
            <p className="results-kicker">INSIGHT RESULTS</p>
            <span className="results-kicker-line" aria-hidden="true" />
            <h2>숫자 뒤에 숨은<br />‘왜’를 읽습니다</h2>
            <p className="results-description">찬반 비율만 보여주지 않습니다.<br />누가, 어떤 맥락에서, 무엇을 망설였는지<br />한눈에 확인하세요.</p>
            <div className="results-tip"><span aria-hidden="true">✦</span><strong>꼭 상품에 관한 이미지와 자세한 설명이 있어야 좋은 분석을 받을 수 있습니다.</strong></div>
            <a className="results-button" href="#report">샘플 리포트 보기 <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <aside className="faq-intro">
            <p className="faq-kicker">FAQ</p>
            <span className="faq-kicker-line" aria-hidden="true" />
            <h2>시작하기 전에<br />궁금한 점</h2>
            <span className="faq-divider-line" aria-hidden="true" />
            <p className="faq-notice"><b aria-hidden="true">*</b><span>합성 페르소나의 의견은<br />의사결정을 돕는 참고 자료이며,<br />실제 고객 조사를 완전히<br />대체하지 않습니다.</span></p>
            <a className="faq-contact" href="#start">더 궁금한 점 문의하기 <span aria-hidden="true">→</span></a>
          </aside>

          <div className="faq-list">
            <details className="faq-item">
              <summary><span className="faq-number">01</span><strong>어떤 상품을 테스트할 수 있나요?</strong><span className="faq-toggle" aria-hidden="true" /></summary>
              <p className="faq-answer">식품, 뷰티, 생활용품, 디지털 서비스 등 다양한 상품을 테스트할 수 있습니다.</p>
            </details>
            <details className="faq-item" open>
              <summary><span className="faq-number">02</span><strong>AI 고객은 어떻게 구성되나요?</strong><span className="faq-toggle" aria-hidden="true" /></summary>
              <p className="faq-answer">상품과 타깃 조건을 바탕으로 연령, 라이프스타일, 구매 성향이 다른 페르소나를 구성합니다.</p>
            </details>
            <details className="faq-item">
              <summary><span className="faq-number">03</span><strong>결과는 얼마나 빨리 나오나요?</strong><span className="faq-toggle" aria-hidden="true" /></summary>
              <p className="faq-answer">상품 정보를 입력하면 짧은 시간 안에 AI 고객의 반응과 주요 인사이트를 확인할 수 있습니다.</p>
            </details>
            <details className="faq-item">
              <summary><span className="faq-number">04</span><strong>입력한 상품 정보는 안전한가요?</strong><span className="faq-toggle" aria-hidden="true" /></summary>
              <p className="faq-answer">입력한 정보는 테스트 결과 생성에만 사용되며 안전하게 관리됩니다.</p>
            </details>
            <details className="faq-item">
              <summary><span className="faq-number">05</span><strong>실제 고객 조사와 무엇이 다른가요?</strong><span className="faq-toggle" aria-hidden="true" /></summary>
              <p className="faq-answer">더 빠르고 간편하게 초기 반응을 살펴볼 수 있지만, 실제 고객 조사를 완전히 대체하지는 않습니다.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="closing-cta-section" id="closing-cta">
        <div className="closing-cta-container">
          <p className="closing-cta-eyebrow">READY WHEN YOU ARE</p>
          <h2>다음 결정은, 고객에게 먼저 물어보세요</h2>
          <p className="closing-cta-description">상품 링크나 간단한 설명만 있으면 시작할 수 있습니다.</p>

          <form className="closing-cta-form" action="#start" method="get">
            <label className="closing-cta-input-wrap">
              <span className="sr-only">상품 링크 또는 설명</span>
              <span className="closing-link-icon" aria-hidden="true"><i /><i /></span>
              <input name="product" type="text" placeholder="상품 링크 또는 설명을 입력하세요" aria-label="상품 링크 또는 설명을 입력하세요" />
            </label>
            <button type="submit">무료로 의견 받기</button>
          </form>
          <a className="closing-cta-link" href="#report">샘플 결과 먼저 보기 <span aria-hidden="true">→</span></a>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand-block">
              <a className="footer-brand" href="/" aria-label="미리 묻다 홈">
                <img src="/logo-mark.svg" alt="" width="54" height="54" />
                <strong>미리 묻다</strong>
              </a>
              <p>만들기 전에, AI 고객에게 먼저 묻는 구매 인사이트 서비스</p>
            </div>

            <nav className="footer-nav" aria-label="푸터 메뉴">
              <div>
                <h2>서비스</h2>
                <a href="#service">서비스 소개</a>
                <a href="#report">결과 예시</a>
              </div>
              <div>
                <h2>지원</h2>
                <a href="#faq">자주 묻는 질문</a>
                <a href="#closing-cta">문의하기</a>
              </div>
            </nav>
          </div>

          <div className="footer-bottom">
            <p>© 2026 미리 묻다. All rights reserved.</p>
            <nav aria-label="정책 메뉴"><a href="#terms">이용약관</a><span aria-hidden="true" /> <a href="#privacy">개인정보처리방침</a></nav>
          </div>
        </div>
      </footer>
    </>
  );
}