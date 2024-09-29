package com.LostAndFound.premier.service;

import com.LostAndFound.premier.bean.entity.Card;
import java.util.List;
public interface CardService {
  List<Card> getCardInfo(String id);
}
