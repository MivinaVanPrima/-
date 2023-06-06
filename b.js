function calc(){
	a = document.getElementById("a").value
	b = document.getElementById("b").value
	c = document.getElementById("c").value

	let D = b*b - 4*a*c
	if (a != 0 && b != 0){
		if (D > 0){
			D = Math.sqrt(D)
			let x1 = (-b - D) / (2*a)
			let x2 = (-b + D) / (2*a)
			let s = "x1 = " + String(x1) + "<br>"
			s += 	"x2 = " + String(x2)
			res.innerHTML = s
		}
		else if (D == 0){
			D = Math.sqrt(D)
			let x = -b / (2*a)
			let s = "x = " + String(x)
			res.innerHTML = s
		}
		else if (D < 0){
			let re = -b / 2 * a
			let im = Math.sqrt(-1 * D)
			let s = "x1 = " + String(re) + " + " + String(im) + "i" + "<br>"
			s += 	"x2 = " + String(re) + " - " + String(im) + "i"
			res.innerHTML = s
		}
	}
	else if (a != 0 && b == 0 && c != 0){
		if (c < 0){
			let x = -1 * c / a
			x = Math.sqrt(x)
			let s = "x1 = " + String(x) + "<br>"
			x *= -1
			s +=	"x2 = " + String(x)
			res.innerHTML = s
		}
		else if (c > 0){
			let x = c / a
			x = Math.sqrt(x)
			let s = "x1 = " + String(x) + "i" + "<br>"
			x *= -1
			s +=	"x2 = " + String(x) + "i"
			res.innerHTML = s
		}
	}
	else if (a != 0 && b == 0 && c == 0){
		res.innerHTML = "x = 0"
	}
	else{
		res.innerHTML = "No solution"
	}
}