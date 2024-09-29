package com.LostAndFound.premier.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.LostAndFound.premier.bean.entity.Card;
import com.LostAndFound.premier.dao.CardMapper;
import com.LostAndFound.premier.service.CardService;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;



@Service
public class CardServiceImpl implements CardService{

  @Autowired
  CardMapper myCardMapper;

  public List<Card> getCardInfo(String id){
    // return this.myCardMapper.getAllCards(id);
    return this.myCardMapper.selectList(Wrappers.<Card>lambdaQuery()
    .like(StringUtils.isNotBlank(id), Card::getName, id.toLowerCase()));
  }


}
