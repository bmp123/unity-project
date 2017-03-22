#pragma strict

private var physic: Rigidbody2D;
private  var obj: GameObject;
public var Mainhero: GameObject;
private var MoveVec: Vector2;
private var dotUp: float;
private var flag: boolean = true;

function Start () {
    obj = gameObject;
    physic = GetComponent.<Rigidbody2D>();
     physic.AddForce(new Vector2(transform.position.x-Mainhero.transform.position.x,Mainhero.transform.position.y*10)*-40);
  //  MoveVec = new Vector2(-5, Mainhero.transform.position.y + Random.Range(transform.position.y, transform.position.y + 1));
    // physic.AddForce(transform.right * -50, ForceMode2D.Impulse);
  
    

}

function Update () {
    
   /* if (transform.position.x > dotUp) {
        MoveVec.y = Mainhero.transform.position.y+5;
    }
   
    if (transform.position.x <= Mainhero.transform.position.x+4) {
        physic.velocity = Vector2(0, 0);
    } else {
        physic.velocity = MoveVec * 3;
    }*/


    
}

