import { FunctionComponent } from 'react';
import { motion, Variants } from 'framer-motion';

const animations: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

export const withStandartAnimation =
  <P extends object>(Component: React.ComponentType<P>): FunctionComponent<P> =>
  ({ ...props }) =>
    (
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: 'just',
        }}
      >
        <Component {...(props as P)} />
      </motion.div>
    );
