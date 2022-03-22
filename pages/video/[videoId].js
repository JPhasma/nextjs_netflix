import { useRouter } from 'next/router';
import Modal from 'react-modal';

import styles from '../../styles/Video.module.css';

Modal.setAppElement('#__next');

const Video = () => {
  const router = useRouter();
  console.log({ router });
  const videoId = router.query.videoId;
  return (
    <div>
      video page {router.query.videoId}
      <Modal
        isOpen={true}
        contentLabel='Watch the video'
        onRequestClose={() => {
          router.back;
        }}
        overlayClassName={styles.overlay}
      >
        <div>Modal Body</div>
        <iframe
          id='ytplayer'
          className={styles.videoPlayer}
          type='text/html'
          width='100%'
          height='360'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameborder='0'
        ></iframe>
      </Modal>
    </div>
  );
};

export default Video;
