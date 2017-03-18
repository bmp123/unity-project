#pragma strict

function Start () {
	
}

function Update () {
    if(Input.GetMouseButtonDown(0)) {
        Debug.Log("Pressed left click.");
    }
    for (var i: int = 0; i < Input.touchCount; ++i) {
	    if (Input.GetTouch(i).phase == TouchPhase.Began)
			Debug.Log('oooooo');
    }
}
