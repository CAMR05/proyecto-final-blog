import { gsap } from 'gsap';

export default class Preloader {
    constructor(args={}) {
        this.duration = args.duration || 1;
        this.delay = args.delay || 0;
        this.preloader = document.getElementById('preloader');
        this.isHidden = false;
        
        // Asegurarnos de que el preloader esté visible inicialmente
        if (this.preloader) {
            this.preloader.style.display = 'flex';
            this.preloader.style.opacity = '1';
        }
    }

    show() {
        if (!this.preloader) return;
        
        this.isHidden = false;
        this.preloader.style.display = 'flex';
        this.preloader.style.opacity = '1';
        this.preloader.classList.remove('fade-out');
    }

    hide() {
        if (!this.preloader) return;
        
        // Deshabilitar la interacción con la página mientras el preloader está visible
        document.body.style.pointerEvents = 'none';
        
        // Añadir la clase fade-out para iniciar la transición
        this.preloader.classList.add('fade-out');
        
        // Esperar a que termine la transición antes de ocultar completamente
        setTimeout(() => {
            this.preloader.style.display = 'none';
            this.isHidden = true;
            document.body.style.pointerEvents = 'auto';
        }, 500); // 500ms = duración de la transición CSS
    }

    isPreloaderHidden() {
        return this.isHidden;
    }
}