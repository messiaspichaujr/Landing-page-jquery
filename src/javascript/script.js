/* Iniciando o jQuery */


$(document).ready(function() {
    $('#mobile_btn').on('click', function () {

        $('#mobile_menu').toggleClass('active'); // Alterna a classe 'active' do menu mobile ao clicar no botão
        $('#mobile_btn').find('i').toggleClass('fa-x'); // Alterna a classe do ícone dentro do botão mobile
    });

    const sections = $('section'); // Seleciona todas as seções da página
    const navItems = $('.nav-item'); // Seleciona todos os itens do menu de navegação

    // Adiciona um evento de scroll à janela
    $(window).on('scroll', function () {

        const header = $('header'); // Seleciona o cabeçalho

        const scrollPosition = $(window).scrollTop() - header.outerHeight(); 

        let activeSectionIndex = 0; 

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none'); 
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)'); 
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96; // Posição do topo da seção ajustada pela altura do cabeçalho
            const sectionBottom = sectionTop + section.outerHeight(); // Posição do fim da seção

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {

                activeSectionIndex = i; // Define o índice da seção ativa se o scroll estiver dentro dos limites da seção

                return false;

            }
        });

        navItems.removeClass('active'); // Remove a classe 'active' de todos os itens de navegação

        $(navItems[activeSectionIndex]).addClass('active'); // Adiciona a classe 'active' ao item de navegação correspondente à seção ativa
    });

    // Aplica efeitos de revelação com o ScrollReveal a vários elementos
    
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%' 
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%' 
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%' 
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
