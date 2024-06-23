import { Html } from "@react-three/drei";

const BuyMeACoffee = () => {
  return (
    <Html rotation={[0, 0, 0]} position={[14, 3, 0]}>
      <a href="https://www.buymeacoffee.com/jiwooproity" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ width: 150, height: "auto" }}
        />
      </a>
    </Html>
  );
};

export default BuyMeACoffee;
