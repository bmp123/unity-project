#pragma strict

var kolesog : GameObject;
var koleso: float;

function Start () {
	
}

function Update () {
    koleso = kolesog.transform.position.y ;
    Debug.Log('X: ' + koleso);
    if(Input.GetMouseButtonDown(0)) {
        Debug.Log("Pressed left click.");
    }
    for (var i: int = 0; i < Input.touchCount; ++i) {
	    if (Input.GetTouch(i).phase == TouchPhase.Began)
			Debug.Log('oooooo');
    }
}
