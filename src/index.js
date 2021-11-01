import { Cyl } from './cyl'

const cylEls = Array.from(document.querySelectorAll('.cyl'))

cylEls.forEach((el) => {
	const c = new Cyl(el, {
    backgroundColor: 0x000000,
		debug: false,
  })

	el.querySelector('.controls .left').addEventListener('click', () => {
		c.prev()
	})

	el.querySelector('.controls .right').addEventListener('click', () => {
		c.next()
	})

	console.log(c)
})
