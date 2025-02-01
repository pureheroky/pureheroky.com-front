"use client";

import { useSpring, animated } from "@react-spring/web";
import { Text } from "@/styles";

type AnimatedTextProps = {
  children: React.ReactNode;
  visible: boolean;
  onRest?: () => void;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  visible,
  onRest,
}) => {
  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
    config: { duration: 1200 },
    onRest: () => {
      if (onRest) onRest();
    },
  });

  return (
    <animated.div style={fadeStyles}>
      <Text>{children}</Text>
    </animated.div>
  );
};

export default AnimatedText;
