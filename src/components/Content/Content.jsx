const Content = () => {
  return (
    <>
      <div className="container px-3">
        <main>
          <img src="../../assets/images/image-web-3-mobile.jpg" alt="" />
          <div className="main-text-content">
            <div className="main-heading">
              <h1>The Bright Future of Web 3.0?</h1>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a href="#readmore" className="btn">
                Read more
              </a>
            </div>
          </div>
        </main>
        <aside className="new-news bg-very-dark-blue text-light px-4 py-5">
          <h2 className="text-2xl font-semibold soft-orange">New</h2>
          <div className="new-news-item">
            <h3 className="text-xl font-semibold">
              <a href="#hydoHydrogenvselectriccars">
                Hydrogen VS Electric Cars
              </a>
            </h3>
            <p className="new-news-item-desc">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="new-news-item">
            <h3 className="text-xl font-semibold">
              <a href="#hydoHydrogenvselectriccars">
                The Downsides of AI Artistry
              </a>
            </h3>
            <p className="new-news-item-desc">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="new-news-item">
            <h3>
              <a href="#hydoHydrogenvselectriccars">Is VC Funding Drying Up?</a>
            </h3>
            <p className="new-news-item-desc">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Content;
