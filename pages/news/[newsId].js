// our-domain.com/news/detail
// [ ] : dynamic page라는 것을 표시

import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  // query string의 값을 가져옴
  // newsId는 파일 이름과 동일해야 함
  const newsId = router.query.newsId;

  return <div>Detail Page</div>;
};

export default DetailPage;
