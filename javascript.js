
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('main img');
        const modal = document.createElement('div');
        const modalImg = document.createElement('img');
        
        // Estilos del modal
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'none';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.cursor = 'pointer';

        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Abrir imagen en el modal
        images.forEach(image => {
            image.addEventListener('click', () => {
                modalImg.src = image.src;
                modal.style.display = 'flex';
            });
        });

        // Cerrar el modal al hacer clic
        modal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

