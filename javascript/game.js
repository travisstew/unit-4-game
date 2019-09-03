var player = [];
var i =0;
var pick2;
var pick1;
var pick3;
var player1Name;
var player2Name;
var player1Health;
var player1Attack;
var player2Health;
var player2Attack;

var playerHealth;
var playerHealth2;



     var objects = [
  
      {
    name: 'Travis',
    healthPoints: 150,
    attackPoints: 6,
     },
      {
    name: 'Ashley',
    healthPoints: 200,
    attackPoints: 20,
      },
      {
    name: 'zarriah',
    healthPoints: 150,
    attackPoints: 2,
    },
    {
    name: 'stew',
    healthPoints: 150,
    attackPoints: 15,
     }
];



$(document).ready(function () {
  // $('.player-div').on('click', function(){
  //   $('.player-div').off();
  // });

  $('.button').on('click', function(){
    $('<h2 class= "instructions">Choose Your Player</h2>').insertAfter('.img-contain');
    $('.instructions').css({'font-size':'70px','text-align':'center'});
      $('.button').off();

  $('.player-div').on('click', function(){
           pick1 = parseInt($(this).attr('id'));
          player[i] = objects[pick1];
          i++;
          player1Name = player[0].name;
          player1Health = player[0].healthPoints;
          player1Attack = player[0].attackPoints;
          //player1 fig health score change 
          if(i=== 1){
          pick2 = parseInt($(this).attr('id'));
          pick2 = 1 + pick2;
          playerHealth = "#fig_" + pick2;
          }


          $(playerHealth).html(player[0].healthPoints);
        
          $('.player1').append(this);
          
          $('.instructions').html('<h2>Choose Your Opponent</h2>');
          if(i ===2){
            player2Name = player[1].name;
            player2Health = player[1].healthPoints;
            player2Attack = player[1].attackPoints;
            
            pick1 = parseInt($(this).attr('id'));
            pick3 = 1 + pick1;
            playerHealth2 = "#fig_" + pick3;


            $('.player2').append(this);
            $('.player-div').off();
            $('.instructions').html('<h2>Fight</h2>');
            $('.button').html('fight');

          $('#fight').on('click', function(){
            //what ever you want to happen when fight is clicked
                player[0].healthPoints =  player[0].healthPoints - player[1].attackPoints;
                player[1].healthPoints =  player[1].healthPoints - player[0].attackPoints;
                player[0].attackPoints = player[0].attackPoints *2;
              
                // $('#fig_1').html(player[0].healthPoints);
                $(playerHealth).html(player[0].healthPoints);
                $(playerHealth2).html(player[1].healthPoints);

              if(player[0].healthPoints < 0 ){
                  console.log('player 1 lose ');
                }else if(player[1].healthPoints < 0){
                  console.log('player 2 lose');
                  var player2 = "#" + pick1;
                  $(player2).remove();
                //if the player loses the next click will be the new oppenent

                $('.player-div').on('click', function(){
                    pick1 = parseInt($(this).attr('id'));
                    player[1] = objects[pick1];
                    $('.player2').append(this);
                    $('.player-div').off();
                });
                
              }
          });
    

        }
        
  });
  

  
});//button click div close 



  // $('.button').on('click', function(){
  //   player[i] = "#"+ $(this).attr('id'); // the data object s
   
  //   i++;

  //   player1 = $(player[0]);//add var
  //   $('div').append(player1);
  //   player1Val = parseInt($(player1).val());
  //   player1fight = parseInt($(player1).attr('name'));
  //   player1name = $(player1).attr('id');

  //   player2 = $(player[1]);//add var
  //   $('div').append(player2);
  //   player2Val = parseInt($(player2).val());
  //   player2fight = parseInt($(player2).attr('name'));
  //   player2name = $(player2).attr('id');

  //   if(i ==2){
  //     $('.button').off();
  //   }

  // });

  // $('#fight').on('click', function(){
      
  //   player1Val =  player1Val - player2fight;
  //   player2Val = player2Val - player1fight;
   
  //   if(player1Val < 0 ){
  //    console.log('player 1 lose ');
  //  }else if(player2Val < 0){
  //    console.log('player 2 lose');
  //    player2.remove();
  //   //if the player loses the next click will be the new oppenent
  //    $('.button').on('click', function(){
  //     player[1] = "#" + $(this).attr('id');
      
  //     $('.button').off();
  //    });
     
  //  }
    
  // });


});
