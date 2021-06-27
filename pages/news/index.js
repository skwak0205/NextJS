// our-domain.com/news

import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>

      <ul>
        <li>
          {/* <a href='/news/article1'>News Article 1</a> - a 태그를 사용하면 다른 페이지로 이동 시 reloading 되기 때문에 SPA라고 할 수 없음 */}

          <Link href='/news/article1'>News Article 1</Link>
        </li>
        <li>News Article 2</li>
      </ul>
    </>
  );
};

export default NewsPage;
