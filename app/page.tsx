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
              <div className="network-path path-top-left" aria-hidden="true" />
              <div className="network-path path-top-right" aria-hidden="true" />
              <div className="network-path path-bottom-left" aria-hidden="true" />
              <div className="network-path path-bottom-right" aria-hidden="true" />
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
    </main>
  );
}