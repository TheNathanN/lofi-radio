import React from 'react';
import { motion } from 'framer-motion';

import styles from './person.module.scss';

const Person = () => {
  return (
    <motion.svg
      className={styles.person}
      width='137'
      height='230'
      viewBox='0 0 137 230'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <path
        d='M41.4176 195.332L43.1261 181.21L91.3921 168.8L85.8394 152.111C89.7072 140.995 96.4979 135.547 108.904 140.984L130.245 154.266C132.319 155.557 134.009 157.383 135.137 159.552C136.266 161.721 136.792 164.154 136.66 166.597C136.53 169.049 135.741 171.421 134.376 173.461C133.012 175.502 131.123 177.135 128.91 178.189C105.019 189.535 74.5694 193.877 41.4176 195.332Z'
        fill='#9B6B63'
      />
      <path
        d='M44.4076 199.611L29.4579 197.472L15.4752 200.331C14.6185 200.506 13.734 200.493 12.883 200.292C12.0319 200.091 11.2346 199.708 10.546 199.168C9.85734 198.628 9.29392 197.945 8.89462 197.165C8.49533 196.386 8.26969 195.529 8.23329 194.654C8.19259 193.675 8.38971 192.701 8.80775 191.815C9.2258 190.93 9.85225 190.159 10.6333 189.569L32.5443 173.03C34.4235 171.612 36.7457 170.911 39.0942 171.053C41.4427 171.195 43.6637 172.172 45.3585 173.807L50.8145 179.071C46.9102 181.497 44.007 185.138 42.2719 190.197C46.0242 192.264 46.7361 195.402 44.4076 199.611Z'
        fill='#2F2E41'
      />
      <path
        d='M80.2866 64.8115L49.3196 77.8635C51.8364 65.203 53.0907 53.6699 49.3196 46.6242L69.1812 44.2705C68.1954 49.6852 73.2204 56.9365 80.2866 64.8115Z'
        fill='#9B6B63'
      />
      <path
        d='M27.7494 194.904L16.2168 194.048C9.15182 164.532 5.53463 136.632 7.11347 111.17C7.33657 107.453 8.98803 103.967 11.7213 101.444C14.4546 98.9205 18.0571 97.5558 21.773 97.6363C25.3437 97.7176 28.7559 99.1295 31.3432 101.596L46.2568 115.815C52.9074 122.107 58.0702 129.808 61.3677 138.356C65.5914 149.439 64.0751 155.652 53.9918 154.597C47.6912 153.893 41.8964 150.807 37.7904 145.967L26.8951 133.281L27.7494 194.904Z'
        fill='#9B6B63'
      />
      <path
        d='M18.8186 229.979C17.307 229.88 15.8384 229.434 14.5266 228.675C13.2149 227.916 12.0951 226.865 11.2542 225.603C10.4132 224.34 9.87366 222.901 9.67729 221.396C9.48092 219.891 9.63301 218.361 10.1218 216.925L12.3726 210.31L14.0812 193.62C16.713 188.24 20.4403 189.045 24.7595 193.192C27.5054 192.922 28.0948 190.171 27.7494 186.345L36.4084 198.024C37.1494 199.023 37.6094 200.203 37.7404 201.442C37.8714 202.68 37.6686 203.93 37.1531 205.063L28.4384 224.215C27.608 226.04 26.243 227.569 24.5248 228.599C22.8065 229.628 20.8164 230.109 18.8186 229.979Z'
        fill='#2F2E41'
      />
      <path
        d='M127.912 152.752C112.108 161.739 107.155 162 91.3921 168.372L77.7239 160.669C61.6715 166.616 50.4111 158.464 38.2141 146.333C46.1958 133.014 42.6657 115.706 47.611 115.95L106.769 134.565L109.332 140.984L127.912 152.752Z'
        fill='#2F2E41'
      />
      <path
        d='M108.904 138.844C88.0164 147.903 65.5258 138.312 46.3296 117.234L33.6189 65.8032C33.4687 65.2367 33.4358 64.6454 33.5224 64.0656C33.609 63.4859 33.8132 62.9301 34.1224 62.4325C34.4316 61.9348 34.8393 61.5059 35.3203 61.1722C35.8013 60.8385 36.3455 60.607 36.9192 60.492L51.6688 57.5365L58.93 69.0908L73.4525 56.2527L88.8753 61.3043C90.9259 61.976 92.7559 63.1932 94.1697 64.8259C95.5835 66.4586 96.5279 68.4455 96.9022 70.5743L108.904 138.844Z'
        fill='#6C63FF'
      />
      <path
        opacity='0.2'
        d='M75.7263 182.445C74.599 182.015 73.5911 181.32 72.7873 180.419C71.9834 179.517 71.407 178.436 71.1065 177.266C70.8059 176.095 70.79 174.87 71.06 173.692C71.33 172.514 71.878 171.418 72.6581 170.496L82.4223 158.958L89.2564 162.809L85.7372 177.183C85.4826 178.223 85.0102 179.197 84.3513 180.041C83.6925 180.884 82.8623 181.577 81.9157 182.075C80.9691 182.573 79.9277 182.863 78.8607 182.927C77.7936 182.99 76.7252 182.826 75.7263 182.445Z'
        fill='black'
      />
      <path
        d='M75.7263 180.733C74.599 180.303 73.5911 179.608 72.7873 178.707C71.9834 177.806 71.407 176.724 71.1065 175.554C70.8059 174.383 70.79 173.158 71.06 171.98C71.33 170.802 71.878 169.706 72.6581 168.784L82.4223 157.246L89.2563 161.097L85.7372 175.471C85.4826 176.512 85.0102 177.486 84.3513 178.329C83.6925 179.172 82.8622 179.866 81.9156 180.363C80.969 180.861 79.9277 181.151 78.8607 181.215C77.7936 181.279 76.7252 181.114 75.7263 180.733Z'
        fill='#9B6B63'
      />
      <path
        d='M90.9649 164.521L80.7137 157.674L95.6634 117.876L90.1107 61.8159L95.176 64.9877C97.8944 66.6899 100.239 68.9277 102.069 71.5652C103.898 74.2028 105.173 77.1851 105.817 80.3314L114.03 120.443C110.437 138.932 104.447 155.2 90.9649 164.521Z'
        fill='#6C63FF'
      />
      <path
        opacity='0.2'
        d='M84.7717 100.972L89.8974 126.649L85.6815 141.665L84.7717 100.972Z'
        fill='black'
      />
      <path
        d='M67.9923 75.0684L67.8498 76.2356L66.9693 83.4381L65.5273 95.2332L65.1663 98.1863C65.1388 98.4118 65.0391 98.6184 64.8857 98.768C64.7322 98.9176 64.5355 99 64.3319 99H54.7161C54.5128 99.0001 54.3163 98.9179 54.1629 98.7688C54.0096 98.6197 53.9097 98.4136 53.8817 98.1886L53.5144 95.2332L52.0481 83.4381L51.152 76.2303L51.0081 75.0706C50.9914 74.9374 51.0006 74.8017 51.0349 74.6728C51.0692 74.5438 51.1278 74.4246 51.2068 74.3232C51.2859 74.2217 51.3835 74.1404 51.493 74.0846C51.6026 74.0289 51.7216 74 51.8419 74H67.1579C67.2781 74.0001 67.3969 74.0289 67.5063 74.0845C67.6157 74.1401 67.7132 74.2212 67.7923 74.3224C67.8713 74.4236 67.9301 74.5425 67.9646 74.6712C67.9991 74.7998 68.0085 74.9353 67.9923 75.0684V75.0684Z'
        fill='#3F3D56'
      />
      <path
        d='M70.2231 94.7565C70.3479 95.9587 70.1831 97.1732 69.7425 98.2984C69.3019 99.4235 68.5983 100.426 67.6909 101.223C66.7835 102.019 65.6987 102.586 64.5275 102.875C63.3563 103.165 62.1328 103.169 60.9598 102.886L46.2783 99.3551L46.6294 91.5071L61.0227 88.1752C62.0642 87.9341 63.1449 87.9175 64.1933 88.1266C65.2417 88.3357 66.2337 88.7656 67.1037 89.3879C67.9737 90.0102 68.7017 90.8107 69.2394 91.7363C69.7772 92.6618 70.1125 93.6913 70.2231 94.7565Z'
        fill='#9B6B63'
      />
      <path
        d='M50.3874 100.758L10.7657 101.751C9.33542 101.786 7.91454 101.509 6.60207 100.939C5.28961 100.368 4.11709 99.5176 3.16625 98.4465C2.21541 97.3755 1.5091 96.1096 1.09653 94.7371C0.68395 93.3646 0.575047 91.9184 0.77738 90.4994C1.0944 88.2761 2.15954 86.2278 3.79659 84.6935L22.4518 67.2091C25.9117 63.9663 30.2228 61.7793 34.8794 60.9045L41.4176 59.6763L45.2618 88.7759L23.051 86.2083L49.106 89.2039L50.3874 100.758Z'
        fill='#6C63FF'
      />
      <path
        d='M58.6859 51.3475C66.3216 51.3475 72.5115 45.1459 72.5115 37.4958C72.5115 29.8457 66.3216 23.6441 58.6859 23.6441C51.0502 23.6441 44.8602 29.8457 44.8602 37.4958C44.8602 45.1459 51.0502 51.3475 58.6859 51.3475Z'
        fill='#9B6B63'
      />
      <path
        d='M45.2465 38.3999C45.2465 38.3999 37.2794 12.2765 61.6291 17.7553C65.4059 18.6051 68.6689 20.8047 71.2645 23.6817C71.4971 23.9333 71.7818 24.1309 72.0987 24.2606C72.4156 24.3903 72.7569 24.4489 73.0988 24.4324C76.9885 24.4324 79.3912 38.3584 71.6117 44.4823C71.6117 44.4823 73.1991 36.2417 70.3137 33.4337C69.7949 32.9586 69.3606 32.3983 69.0295 31.777C67.1515 27.9817 60.8388 26.7359 56.485 27.059C54.2623 27.224 54.068 31.1066 51.6074 30.5643C46.0088 29.3303 44.2216 35.8282 45.2465 38.3999Z'
        fill='#2F2E41'
      />
      <path
        d='M75.59 36.9095L74.7579 36.6131C75.4634 34.7155 75.8456 32.7183 75.8884 30.7054C76.1112 20.8086 68.2332 12.7164 58.3272 12.6666C48.4211 12.6168 40.1808 20.628 39.9581 30.5248C39.9137 32.4103 40.1672 34.2857 40.7092 36.0821L39.8584 36.3521C38.9994 33.5047 38.8347 30.4822 39.3779 27.5342C39.9212 24.5862 41.1567 21.7975 42.9826 19.3983C44.8084 16.9992 47.1721 15.0585 49.8783 13.7366C52.5845 12.4148 55.5556 11.7497 58.5461 11.7964C61.5366 11.843 64.4606 12.6001 67.0766 14.0049C69.6926 15.4098 71.9254 17.4222 73.5906 19.8758C75.2559 22.3294 76.3057 25.1538 76.6533 28.1157C77.001 31.0775 76.6365 34.0918 75.59 36.9095Z'
        fill='#080F0F'
      />
      <path
        d='M43.7902 28.1079C41.8854 28.0816 40.0482 28.8132 38.6828 30.1415C37.3173 31.4699 36.5355 33.2863 36.5093 35.1911C36.4831 37.0959 37.2146 38.9331 38.543 40.2985C39.8714 41.6639 41.6877 42.4458 43.5925 42.472L45.3766 42.4965L45.5743 28.1324L43.7902 28.1079Z'
        fill='#080F0F'
      />
      <path
        d='M45.6339 27.1266C45.2094 27.1213 44.8001 27.2845 44.4958 27.5805C44.1915 27.8766 44.0171 28.2812 44.0108 28.7057L43.8294 41.8804C43.8236 42.3051 43.9867 42.7146 44.2828 43.019C44.5789 43.3234 44.9839 43.4977 45.4085 43.5036C45.8331 43.5094 46.2427 43.3463 46.5471 43.0502C46.8515 42.7541 47.0258 42.3491 47.0316 41.9245L47.2129 28.7498C47.2183 28.3253 47.0551 27.916 46.759 27.6117C46.463 27.3074 46.0584 27.1329 45.6339 27.1266Z'
        fill='#535461'
      />
      <path
        d='M70.5367 42.8428L72.3208 42.8673C74.2256 42.8935 76.0628 42.162 77.4282 40.8336C78.7937 39.5053 79.5755 37.6889 79.6017 35.7841C79.6147 34.8409 79.4418 33.9044 79.0928 33.0281C78.7439 32.1518 78.2257 31.3528 77.568 30.6767C76.2396 29.3112 74.4233 28.5294 72.5185 28.5032L70.7344 28.4786L70.5367 42.8428Z'
        fill='#080F0F'
      />
      <path
        d='M70.7025 27.4716C70.278 27.4662 69.8687 27.6295 69.5644 27.9255C69.2601 28.2215 69.0857 28.6262 69.0794 29.0507L68.8981 42.2254C68.8925 42.6498 69.0557 43.0591 69.3518 43.3633C69.6479 43.6674 70.0527 43.8416 70.4771 43.8474C70.9016 43.8532 71.311 43.6903 71.6153 43.3944C71.9197 43.0985 72.0941 42.6939 72.1002 42.2695L72.2816 29.0947C72.2869 28.6702 72.1237 28.2609 71.8276 27.9567C71.5316 27.6524 71.127 27.4779 70.7025 27.4716Z'
        fill='#535461'
      />
    </motion.svg>
  );
};

export default Person;
