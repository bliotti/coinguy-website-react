function App() {
  return (
    <div id="body" className="flex a-items-center flex-column pa3 fw-n">
      <div className="container wf">
        <div className="wf mb3">
          <h1 className="tc mt5">
            <a href="/" className="cl-near-black">
              <h4>bliotti</h4>
            </a>
          </h1>

          <div className="flex flex-row j-center">
            <div className="sw5">
              <a href="https://github.com/bliotti">
                <img src="/images/github.svg" alt="" title="my repo" />
              </a>
            </div>

            <div className="sw5">
              <a href="/KEY.txt">
                <img src="/images/key.svg" alt="" title="PGP key" />
              </a>
            </div>

            <div className="sw5">
              <a href="mailto:dev@coinguy.io">
                <img src="/images/email.svg" alt="" title="mail" />
              </a>
            </div>

            <div className="sw5">
              <a href="https://t.me/coinguybri">
                <img
                  src="/images/telegram.png"
                  alt=""
                  title="please don't spam me"
                />
              </a>
            </div>
          </div>
        </div>
        <nav className="wf tc f3">
          <hr />
          <a className="cl-near-black" href="/">
            home
          </a>
          |
          <a className="cl-near-black" href="/about/">
            about
          </a>
          |
          <a className="cl-near-black" href="/bookshelf/">
            bookshelf
          </a>
          |
          <a className="cl-near-black" href="/bitcoin/">
            bitcoin
          </a>
          <hr />
        </nav>
      </div>
    </div>
  );
}

export default App;
