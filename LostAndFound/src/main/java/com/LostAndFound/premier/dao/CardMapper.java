package com.LostAndFound.premier.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.LostAndFound.premier.bean.entity.Card;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;


public interface CardMapper extends BaseMapper<Card> {

  // default List<Card> getAllCards(String id){
  //   List<Card> answer = this.selectList(Wrappers.<Card>lambdaQuery()    
  //   .and(StringUtils.isNotBlank(id), wrapper -> wrapper.like(Card::getName, id.toLowerCase())));
  //   return answer;
  // }

}
