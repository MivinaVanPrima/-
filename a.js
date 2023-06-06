let s = '<table>' + "\n"
s +=	"<tbody>" + "\n"
s +=	"<tr>" + "\n"
	s += 	"<th>" + " " + "</th>"
	for (var i = 1; i <= 10; i++) {
		s += "<th>" + String(i) + "</th>" + "\n"
	}
	s += 	"</tr>" + "\n"
for (var i = 1; i <= 10; i++) {
	s +=	"<tr>" + "\n"
	s += 	"<th>" + String(i) + "</th>"
	for (var j = 1; j <= 10; j++) {
		s += "<th>" + String(i*j) + "</th>" + "\n"
	}
	s += 	"</tr>" + "\n"
}
s +=	"</tbody>" + "\n"
s += 	"</table>"
tb.innerHTML = s