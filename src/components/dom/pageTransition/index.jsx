import { PageTransitionStyle } from '@/components/dom/pageTransition/index.style'
import useStore from '@/helpers/store';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

let transform = ["-02%", "-06%", "-10%", "-14%", "-18%", "-22%", "-26%", "-30%", "-34%", "-38%", "-42%", "-46%", "-50%", "-54%", "-58%", "-62%", "-66%", "-70%", "-74%", "-78%", "-82%", "-86%", "-90%", "-94%", "-98%"]
let times = []
let oldTime = 0
transform.forEach((value, index) => {
  const time = (1 / (transform.length - 1)) * index;
  times.push(oldTime + 0.000000000000000001)
  times.push(time)
  oldTime = time
});
transform = [...transform, ...transform].sort()
const transformReverse = [...transform].reverse()

// const transition = {
//   initial: {
//     x: "-2%",
//     y: "-50%",
//   },
//   exit: {
//     x: transform,
//     y: "-50%",
//     transition: { duration: 1, times: times }
//   }
// };
const transition = {
  initial: {
    x: "-2%",
    y: "-50%",
  },
  animate: {
    x: transform,
    y: "-50%",
    transition: { duration: 1, times: times }
  },
  exit: {
    x: transform,
    y: "-50%",
    transition: { duration: 1, times: times }
  }
};

const PageTransition = () => {
  const router = useRouter()
  const ink = useStore((s) => s.ink)

  return (
    <PageTransitionStyle initial="initial" exit="exit">
      <motion.img className="background" src={`/img/ink-${ink}.png`} variants={transition}/>
    </PageTransitionStyle>
  )
}

export default motion(React.forwardRef(PageTransition));
