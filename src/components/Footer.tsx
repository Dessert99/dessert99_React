import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// 페이지 이동했을 때 최상단으로 스크롤되는 함수
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게
  });
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">회사 소개</h3>
            <p className="text-gray-400">
              저희 회사는 최고의 서비스를 제공하기 위해 노력하고 있습니다.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2  text-gray-400">
              <li>
                <Link to="/" onClick={scrollTop} className="hover:text-white transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollTop}
                  className="hover:text-white transition-colors"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={scrollTop}
                  className="hover:text-white transition-colors"
                >
                  프로젝트
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={scrollTop}
                  className="hover:text-white transition-colors"
                >
                  갤러리
                </Link>
              </li>
              <li>
                <Link
                  to="/recruit"
                  onClick={scrollTop}
                  className="hover:text-white transition-colors"
                >
                  모집
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  onClick={scrollTop}
                  className="hover:text-white transition-colors"
                >
                  회사
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2  text-gray-400">
              <li>서울특별시 동대문구</li>
              <li>이문동</li>
              <li>전화: 000-0000-0000</li>
              <li>이메일: likelion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">소셜 미디어</h3>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 text-center mt-8 pt-8 text-gray-400">
          <p>&copy; 2026 멋쟁이사자처럼 14기 모집 중</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
grid = 요소를 CSS Grid 컨테이너로 만들어(display: grid) 자식들을 그리드에 배치
grid-cols-1 = 그리드의 열을 1개로 설정
md:grid-cols-4 = md 이상 화면에서 열을 4개로 바꾼다.
font-bold = 폰트 굵게
container = 요소에 반응형 최대 너비를 적용하는 래퍼로, 브레이크포인트별 max-width가 걸린다.(기본적으로 가운데 정렬 아님 → 보통 mx-auto와 함께 사용)
mx-auto = 좌우 마진을 자동으로 설정해 가운데 정렬되도록 한다.
space-y-2 = 부모의 직계 자식들 사이에만 간격을 준다. 첫 요소를 제외한 모든 자식에 margin-top: 0.5rem을 주는 방식이다.
text-center = 글자 가운데
 */
