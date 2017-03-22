#pragma strict

private var balls: GameObject[];
private var index: int = 0;
private var indexx: int = 0;
private var a: boolean = true;
private var anim: Animator;
public  var mainHero: GameObject;
   
function Start () {
    anim = mainHero.GetComponent.<Animator>();
}

function Update () {
    balls = GameObject.FindGameObjectsWithTag("ball");
    index = 0;
    for (var ball: GameObject in balls) {
        index++;
        if (index == balls.length) {
            transform.position = Vector2(transform.position.x, ball.transform.position.y);
        }
    }
if(a == true) {
    indexx=0;
    for (var ball: GameObject in GameObject.FindGameObjectsWithTag("ball")) {
         indexx++;
         if (indexx == balls.length) {
           Destroy(ball, 5);
        }
}
a = false;
}
    if(Input.GetMouseButtonDown(0)) {
        anim.SetBool('jump', true);
    }
    if(Input.GetMouseButtonUp(0)) {
        anim.SetBool('jump', false);
    }
    // for (var i: int = 0; i < Input.touchCount; ++i) {
	   //  if (Input.GetTouch(i).phase == TouchPhase.Began)
    // }
}
