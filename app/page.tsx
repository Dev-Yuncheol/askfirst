export default function Home() {
  const customers = [
    { className: "customer-practical", image: "/avatar-practical-worker-m30.png", title: "꼼꼼한 실용가", detail: "30대 · 직장인" },
    { className: "customer-design", image: "/avatar-design-student-f20.png", title: "디자인 중시형", detail: "20대 · 대학생" },
    { className: "customer-value", image: "/avatar-value-owner-m40.png", title: "가성비 추구형", detail: "40대 · 자영업" },
    { className: "customer-eco", image: "/avatar-eco-freelancer-f30.png", title: "환경 가치 소비형", detail: "30대 · 프리랜서" },
    { className: "customer-gift", image: "/avatar-gift-worker-m20.png", title: "선물 고려형", detail: "20대 · 사회초년생" },
  ];

  return (
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
          <div className="hero-visual" aria-label="상품 정보가 AI 고객 의견과 핵심 인사이트로 연결되는 과정">
            <div className="visual-grid" aria-hidden="true" />
            <div className="orbit orbit-outer" aria-hidden="true" />
            <div className="orbit orbit-middle" aria-hidden="true" />
            <div className="orbit orbit-inner" aria-hidden="true" />

            <div className="product-area">
              <p className="visual-title">상품 정보</p>
              <article className="product-card">
                <div className="product-image-wrap">
                  <img src="/product-portable-fan-white.png" alt="화이트 휴대용 선풍기" />
                </div>
                <div className="product-copy">
                  <strong>화이트 휴대용 선풍기</strong>
                  <span>3단 풍속, 최대 20시간 사용</span>
                  <span>저소음 · USB-C 충전</span>
                </div>
                <span className="document-icon" aria-hidden="true"><i /><i /><i /></span>
              </article>
            </div>

            <div className="product-connector" aria-hidden="true"><span className="connector-node" /></div>

            <div className="customer-network">
              <div className="customer-count">
                <span className="people-icon" aria-hidden="true"><i /><i /><i /></span>
                <strong>AI 고객 24명</strong>
              </div>

              <div className="network-branches" aria-hidden="true">
                <span className="branch-line branch-top-left" />
                <span className="branch-line branch-top-center" />
                <span className="branch-line branch-top-middle" />
                <span className="branch-line branch-top-right" />
                <span className="branch-line branch-bottom-left" />
                <span className="branch-line branch-bottom-center" />
                <span className="branch-line branch-bottom-right" />
              </div>

              <div className="customer-list">
                {customers.map((customer) => (
                  <article className={`customer ${customer.className}`} key={customer.title}>
                    <img src={customer.image} alt="" />
                    <strong>{customer.title}</strong>
                    <span>{customer.detail}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="insight-connector" aria-hidden="true"><span className="connector-node" /></div>

            <div className="insight-area" id="insight">
              <p className="visual-title">핵심 인사이트</p>
              <article className="insight-card">
                <div className="insight-row">
                  <span className="sentiment-icon positive">●</span>
                  <div><strong>긍정 의견</strong><p>강한 풍량과 휴대성에 높은 만족</p></div>
                  <b className="positive-text">71%</b>
                </div>
                <div className="insight-row">
                  <span className="sentiment-icon neutral">−</span>
                  <div><strong>보완 희망</strong><p>배터리 지속시간, 거치 방식</p></div>
                  <b className="neutral-text">21%</b>
                </div>
                <div className="insight-row">
                  <span className="sentiment-icon negative">!</span>
                  <div><strong>우려 의견</strong><p>가격이 다소 높다는 의견</p></div>
                  <b className="negative-text">8%</b>
                </div>
              </article>
            </div>
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">출시 전에, 고객에게 먼저</p>
            <h1>만들기 전에 <span>미리 물어보세요</span></h1>
            <p className="hero-description">상품 정보를 입력하면 다양한 AI 고객이<br />구매자의 관점에서 솔직한 의견을 들려드려요.</p>
            <div className="hero-actions">
              <a className="hero-primary-button" id="start" href="#service">무료로 의견 받기</a>
              <a className="hero-secondary-link" href="#insight">결과 예시 보기 <span aria-hidden="true">→</span></a>
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
              <div className="result-score"><span>평균 만족도</span><b>+1.35 <small>/ 2</small></b><i><em /></i></div>
            </article>
            <p className="result-time">◷&nbsp; 평균 3분 내 결과</p>
          </div>
        </div>
      </section>
    </main>
  );
}