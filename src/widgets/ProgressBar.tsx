"use client";

import { useSpring } from "@react-spring/web";
import {
  ProgressBarInner,
  ProgressBarText,
  ProgressBarWrapper,
} from "@/styles";
import { ProgressBarProps } from "@/types";

type ExtendedProgressBarProps = ProgressBarProps & {
  visible: boolean;
  onRest?: () => void;
};

const ProgressBar: React.FC<ExtendedProgressBarProps> = ({
  value,
  max = 100,
  label = true,
  visible,
  onRest,
}) => {
  const animatedWidth = useSpring({
    width: `${(value / max) * 100}%`,
    config: { duration: 2400 },
  });
  const appearStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
    config: { duration: 1200 },
    onRest: () => {
      if (onRest) onRest();
    },
  });

  return (
    <ProgressBarWrapper style={appearStyle}>
      <ProgressBarInner style={animatedWidth} />
      {label && (
        <ProgressBarText>{Math.round((value / max) * 100)}%</ProgressBarText>
      )}
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
