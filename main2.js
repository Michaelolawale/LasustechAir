import AOS from './node_modules/aos/dist/aos.js';
import './node_modules/aos/dist/aos.css';

// Initialize AOS with custom options
AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});
