import java.util.ArrayList;
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

    public void rotateArray(List<Integer> ints, int k){
        if (ints.size() == 1){
            System.out.println(ints);
            return;
        }


        List<Integer> newList = new ArrayList<>(ints);
        for (int i = 0; i < ints.size(); i++){
            if(i + k < ints.size())
                newList.set(i+k, ints.get(i));
            else
                newList.set(i+k-ints.size(), ints.get(i));
        }

        System.out.println(newList);

        // for every index, if index + k < array size => just set it
        // else, set it to index + k - array size

    }

}
