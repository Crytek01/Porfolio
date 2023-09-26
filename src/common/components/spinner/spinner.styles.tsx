import styled from 'styled-components';

interface ISpin {
  $size: number;
  $isRunning: boolean;
}

export const Spin = styled.div<ISpin>`
  @keyframes spin {
    0% {
      transform: translate3d(-50%, 0, 0) rotate(0deg);
    }

    100% {
      transform: translate3d(-50%, 0, 0) rotate(360deg);
    }
  }

  display: block;
  animation: 1.5s linear infinite spin;
  animation-play-state: ${({ $isRunning }) =>
    $isRunning ? 'running' : 'paused'};
  border: solid 5px #cfd0d1;
  border-bottom-color: #1c87c9;
  border-radius: 50%;
  height: ${({ $size }) => $size / 10}rem;
  width: ${({ $size }) => $size / 10}rem;

  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
`;
