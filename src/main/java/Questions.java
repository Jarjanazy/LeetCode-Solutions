import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Questions {

    public void countThings(List<Integer> ints){
        Map<Integer, Long> collect =
                ints.stream().collect(Collectors.groupingBy(e -> e, Collectors.counting()));

        long result = ints.
                stream().
                filter(i -> collect.containsKey(i+1)).
                map(i -> collect.get(i+1)).
                reduce(0L, Long::sum);

        System.out.println(result);
    }

}
