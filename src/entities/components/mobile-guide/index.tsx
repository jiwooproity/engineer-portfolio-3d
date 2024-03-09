import "@/shared/assets/css/mobile-guide.css";

import preview_loader from "@/shared/assets/images/preview-loader.png";
import preview_main from "@/shared/assets/images/preview-main.png";
import preview_zoom from "@/shared/assets/images/preview-zoom.png";

const MobileGuide = () => {
  return (
    <div className="guide-container">
      <div className="guide-title-box">
        <h1 className="guide-title">R3F 3D Action Portfolio</h1>
        <h2 className="guide-sub-title">Macbook Air 2020</h2>
        <div className="guide-line"></div>
      </div>
      <div className="guide-content">
        <p>
          이 포트폴리오는 원활한 화면 동작을 위해 모바일 화면은 지원하지
          않습니다.
        </p>
        <p>작업물을 확인하실 분은 PC 환경으로 접속해 주시면 감사하겠습니다.</p>
      </div>
      <div className="guide-title-box">
        <h1 className="guide-title">Models</h1>
        <div className="guide-line"></div>
      </div>
      <div className="guide-content">
        <p>
          사용된 Model ( GLB, GLTF ) 는 모두 Sketchfab에서 구매한
          오브젝트입니다.
        </p>
        <p>
          <a href="https://sketchfab.com">https://sketchfab.com/feed</a>
        </p>
      </div>
      <div className="guide-title-box">
        <h1 className="guide-title">Preview</h1>
        <div className="guide-line"></div>
      </div>
      <div className="guide-content">
        <h1 className="guide-img-title">Loader Page</h1>
        <p>
          화면에 Model 렌더링되는 동안 로더 화면에서 Loader Progress 상태 값
          도출과 완료되는 경우, 커맨드를 통해 화면 진입이 가능합니다.
        </p>
        <img src={preview_loader} />
        <h1 className="guide-img-title">Macbook Air && Coffee Main View</h1>
        <p>
          마우스에 따라 모델이 작은 움직임으로 애니메이션을 가지게 되며, 맥북을
          클릭하면 줌과 함께 다음 컨텐츠를 즐길 수 있습니다.
        </p>
        <img src={preview_main} />
        <h1 className="guide-img-title">Zoom to Macbook Air && Action OS</h1>
        <p>
          줌과 함께 맥북이 확대되고, 화면에 iframe을 통한 웹 페이지가 렌더링되어
          있어 웹 사이트처럼 동작이 가능합니다.
        </p>
        <p>
          웹 사이트는 프로젝트 내부에 Route /screen 페이지에 구현되어 있는
          스크린 컴포넌트를 사용하게 됩니다.
        </p>
        <p>
          아직까지는 구현 중이나, 맥 스크린 내에서 어플리케이션, 포트폴리오
          접속, Contact 내용 확인 등 여러가지 컨텐츠들을 준비할 예정입니다.
        </p>
        <img src={preview_zoom} />
      </div>
    </div>
  );
};

export default MobileGuide;
