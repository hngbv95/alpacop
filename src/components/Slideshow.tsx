import { motion, AnimatePresence } from "framer-motion";


const Slideshow: React.FC<{src:string}> = ({src}) => {
  return (
    <AnimatePresence>
    <motion.img
      src={src}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bannerImage"
    />
  </AnimatePresence>
  )
}

export default Slideshow
