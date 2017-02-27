import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'vote',
    template:`<div class="col-md-1 container-fluid">
              <div class="row"><i class="glyphicon glyphicon-chevron-up Voter" (click)="upVoteClick()"  [class.highlight]="myVote==1"></i></div>
              <div class="row">{{likeCount}}</div>
              <div class="row"><i class="glyphicon glyphicon-chevron-down Voter" (click)="downVoteClick()"   [class.highlight]="myVote==-1"></i></div>
              </div>`,
              styles:[`.Voter{
                            color:#ccc;
                              cursor:pointer;
                        }

                        .highlight{
                            color:orange;
                        }
              
              `]
})

export class voteComponent{
         @Input() likeCount=0 ;
         @Input() myVote=0;

         @Output() vote= new EventEmitter();

         upVoteClick(){
            if(this.myVote==1)
                return;
            this.likeCount++;
            this.myVote++;
            this.vote.emit(this.myVote);            
         }

         downVoteClick(){
            if(this.myVote==-1)
                return;
            this.likeCount--;
            this.myVote--;
            this.vote.emit(this.myVote);     
         }
}