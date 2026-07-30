export default function Home() {
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
      <section className="empty-canvas" aria-label="콘텐츠 영역" />
    </main>
  );
}
