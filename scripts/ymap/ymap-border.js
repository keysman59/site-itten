window.onload = () => {
    console.log('страница загрузилась')

    if (window.innerWidth < 622) {
        function addStyleYmapBorder() {
            let ymapClass0 = document.querySelector('.ymap-ittensy')
            let ymapClass1 = document.querySelectorAll('.ymaps-2-1-79-map')
            let ymapClass2 = document.querySelector('.ymaps-2-1-79-events-pane')
            let ymapClass3 = document.querySelector('.ymaps-2-1-79-inner-panes')

            ymapClass1.forEach(el => {
                el.style.borderRadius = '1000px'
            })

            ymapClass0.style.borderRadius = '1000px'
            ymapClass2.style.borderRadius = '1000px'
            ymapClass3.style.borderRadius = '1000px'

        }
          
        setTimeout(addStyleYmapBorder, 1500);
    } else {
        function addStyleYmapBorder() {
            let ymapClass0 = document.querySelector('.ymap-ittensy')
            let ymapClass1 = document.querySelectorAll('.ymaps-2-1-79-map')
            let ymapClass2 = document.querySelector('.ymaps-2-1-79-events-pane')
            let ymapClass3 = document.querySelector('.ymaps-2-1-79-inner-panes')


            ymapClass1.forEach(el => {
                el.style.borderRadius = '100px'
            })

            ymapClass0.style.borderRadius = '100px'
            ymapClass2.style.borderRadius = '100px'
            ymapClass3.style.borderRadius = '100px'

        }
          
        setTimeout(addStyleYmapBorder, 1500);
    }

}
