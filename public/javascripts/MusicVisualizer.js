function MusicVisualizer(obj){
	this.source  = null
	this.count = 0
}

MusicVisualizer.ac = new (window.AudioContext || window.webkitAudioContext)()
