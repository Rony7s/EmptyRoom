//Room Empty [green] or [Red]
package emptyroom;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

public class RoomController implements Initializable {

    @FXML
    private Button btn1;
    @FXML
    private Button btn2;
    @FXML
    private Button btn3;
    @FXML
    private Button btn4;
    @FXML
    private Button btn12;
    @FXML
    private Button btn9;
    @FXML
    private Button btn10;
    @FXML
    private Button btn11;
    @FXML
    private Button btn8;
    @FXML
    private Button Saturday;
    @FXML
    private Button Sunday;
    @FXML
    private Button Monday;
    @FXML
    private Button Tuesday;
    @FXML
    private Button Wednesday;
    @FXML
    private Button Thursday;
    @FXML
    private Button R_5001;
    @FXML
    private Button R_5002;
    @FXML
    private Button L_5003;
    @FXML
    private TextField startTime;
    @FXML
    private TextField endTime;
    @FXML
    private Button findRoom;
    @FXML
    private Button runningClass;
    @FXML
    private Button emptyClass;
    //starting and ending of methods works
   // RoomController rc = new RoomController();
    int day = 0;
    void OpenClose(int x){
         
         //day(7days) hour(x(8am-5pm)) Room()
         //just for 5 floor
         int room[][][] = {
             //8        9       10        11        12      1           2       3       4
             {{1,0,0}, {0,1,0}, {0,0,1}, {1,0,0}, {0,1,0}, {0,0,1}, {1,0,0}, {0,1,0}, {0,0,1}},
             {{0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}},
             {{0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}},
             {{0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}},
             {{0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}},
             {{0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}}
         };

         if(8<= x && x<=12){
             x = x-8;
         }else{
             x =x+4;
         }
         
         
         //R_5001.setStyle("-fx-background-color: red;");
         if(room[day][x][0] ==0){
             R_5001.setStyle("-fx-background-color: green;");
         }else{
             R_5001.setStyle("-fx-background-color: red;");
         }
         
         if(room[day][x][1] ==0){
             R_5002.setStyle("-fx-background-color: green;");
         }else{
             R_5002.setStyle("-fx-background-color: red;");
         }
         
         if(room[day][x][2] ==0){
             L_5003.setStyle("-fx-background-color: green;");
         }else{
             L_5003.setStyle("-fx-background-color: red;");
         }
    }
    
    
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
        runningClass.setStyle("-fx-background-color: red;");
        emptyClass.setStyle("-fx-background-color: green;");
    }    

     
    
    @FXML
    private void dobtn1(ActionEvent event) {
         OpenClose(1);
    }

    @FXML
    private void dobtn2(ActionEvent event) {
         OpenClose(2);
    }

    @FXML
    private void dobtn3(ActionEvent event) {
        OpenClose(3);
    }

    @FXML
    private void dobtn4(ActionEvent event) {
        OpenClose(4);
    }

    @FXML
    private void dobtn12(ActionEvent event) {
        OpenClose(12);
    }


    @FXML
    private void dobtn10(ActionEvent event) {
        OpenClose(10);
    }

    @FXML
    private void dobtn11(ActionEvent event) {
        OpenClose(11);
    }

    @FXML
    private void dobtn8(ActionEvent event) {
        OpenClose(8);
        
    }

    @FXML
    private void dobtn9(ActionEvent event) {
       OpenClose(9);
        
    }
    
    @FXML
    private void doSaturday(ActionEvent event) {
        day = 0;
    }

    @FXML
    private void doSunday(ActionEvent event) {
        day = 1;
    }

    @FXML
    private void doMonday(ActionEvent event) {
        day = 2;
    }

    @FXML
    private void doTuesday(ActionEvent event) {
        day = 3;
    }

    @FXML
    private void doWednesday(ActionEvent event) {
        day = 4;
    }

    @FXML
    private void doThursday(ActionEvent event) {
        day = 5;
    }

    @FXML
    private void dofindRoom(ActionEvent event) {
        //find room
        

    }
    
}
