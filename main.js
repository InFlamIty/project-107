//https://teachablemachine.withgoogle.com/models/aMbjFRHky/
function start()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aMbjFRHky/model.json" , model_ready)
}
function model_ready()
{
    classifier.classify(gotResult)
}
function gotResult(error , results)
{
    if (error) {+
        console.error(error)
    }
    else{console.log(results)}
}