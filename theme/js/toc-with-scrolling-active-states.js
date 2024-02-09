window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.js-observer');

  const options = {
    root: null,
    rootMargin: '0px 0px',
    // rootMargin: "-50% 0px",
    threshold: 0, // しきいち
  };
    
  const observer = new IntersectionObserver(doWhenIntersect, options);
  boxes.forEach((box) => {
    observer.observe(box);
  });

  /*
    * 見出しの交点を監視
    */
  function doWhenIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // eslint-disable-next-line no-use-before-define
        activateIndex(entry.target);
      }
    });
  }

  /**
     * 目次の色を変える関数
     */
  function activateIndex(element) {
    if (window.matchMedia('only screen and (max-width: 960px)').matches) {
      // 固定メニュー目次
      const currentActiveIndex = document.querySelector('#indexList .active');
      if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove('active');
      } else {
      }

      const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
      newActiveIndex.classList.add('active');
    } else {
      // サイドバー目次
      const currentActiveIndex = document.querySelector('.sidebar #indexList .active');
      if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove('active');
      } else {
      }

      const newActiveIndex = document.querySelector(`.sidebar a[href='#${element.id}']`);
      newActiveIndex.classList.add('active');
    }
  }
});
