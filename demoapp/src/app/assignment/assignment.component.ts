import { Component} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: []
})
export class AssignmentComponent  {
  selectedGame;

    games = [{
                gameName : 'Cricket',
                imageUrl : 'https://www.telegraph.co.uk/content/dam/cricket/2017/02/08/PD4832114_Action-Images_Cricket-West-Indies-V-New-Zealand-World-Cup_trans_NvBQzQNjv4BqPGVFxg_kR3LDuc5o72FjwQPOeyiktbqC97rWpHJgNgk.jpg?imwidth=450',
                players: ['player1','player2','player3']

            },
            {
                gameName : 'Badminton',
                imageUrl : 'https://images.mapsofindia.com/my-india/2017/08/career-in-badminton.jpg',
                players: ['player1','player2','player3']

            },
            {
                gameName : 'Hockey',
                imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3hJREVwKnM6JbrBw_9-dhhIN32mIaK0CazQkUuAbdTCmxJsd',
                players: ['player1','player2','player3']

            }
        ]
  constructor() { }


}
