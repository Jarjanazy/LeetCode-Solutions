import org.junit.jupiter.api.Test;

import java.util.Arrays;

public class QuestionsTest {

    @Test
    void testCountThings(){
        Questions questions = new Questions();
        questions.countThings(Arrays.asList(1, 2, 3));

    }

    @Test
    void testRotateArray(){
        Questions questions = new Questions();
        questions.rotateArray(Arrays.asList(-1,-100,3,99), 2);
    }

}
