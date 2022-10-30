import { motion, Variants } from 'framer-motion';
import { FunctionComponent } from 'react';

const animations: Variants = {
  initial: {
    opacity: 0,
    x: '0',
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 0,
  },
};

export const withEaseInAnimation =
  <P extends object>(Component: React.ComponentType<P>): FunctionComponent<P> =>
  ({ ...props }) =>
    (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.1,
          x: { duration: 0.5 },
          default: { ease: 'linear' },
        }}
      >
        <Component {...(props as P)} />
      </motion.div>
    );
