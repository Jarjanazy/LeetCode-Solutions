import org.junit.jupiter.api.Test;

import java.util.Arrays;

public class QuestionsTest {

    @Test
    void testCountThings(){
        Questions questions = new Questions();
        questions.countThings(Arrays.asList(1, 2, 3));

    }

}
